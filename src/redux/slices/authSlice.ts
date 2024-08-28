import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_API} from '@env';
import {AuthStateType, ChangePasswordPayload} from '../../types/types';

const initialState: AuthStateType = {
  user: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      const user = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        photoURL: response.user.photoURL,
        emailVerified: response.user.emailVerified,
      };
      if (user.emailVerified) {
        return user;
      } else {
        Snackbar.show({
          text: 'Verify your email',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'send verification email',
            onPress() {
              auth().currentUser?.sendEmailVerification();
            },
            textColor: 'yellow',
          },
        });
      }
    } catch (error: any) {
      console.log('Error in signin ', error);
      if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
        Snackbar.show({
          text: 'Invalid email or password',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      } else {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    }
    return rejectWithValue('error while sign in');
  },
);
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (
    {name, email, password}: {name: string; email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      const userToSave = response.user;
      await userToSave.updateProfile({displayName: name});
      await auth().signOut();
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Snackbar.show({
          text: 'Email is already in use',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }

      if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'That email address is invalid!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }
      if (error.code === 'auth/weak-password') {
        Snackbar.show({
          text: 'Choose strong password',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      } else console.log('Error while sign up ', error);
      return rejectWithValue('Error while sign up');
    }
  },
);

export const updateEmail = createAsyncThunk(
  'auth/updateEmail',
  async (email: string, {rejectWithValue, dispatch}) => {
    try {
      await auth().currentUser?.verifyBeforeUpdateEmail(email);
    } catch (error: any) {
      if (error.code === 'auth/requires-recent-login') {
        Snackbar.show({
          text: 'This operation requires recent authentication. Log in again before retrying this request.',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_INDEFINITE,
          numberOfLines: 3,
          action: {
            text: 'Logout',
            onPress() {
              dispatch(signOut());
            },
            textColor: 'yellow',
          },
        });
      }
      console.log('Error updating email ', error);
      return rejectWithValue('Failed to update email');
    }
  },
);
export const updateName = createAsyncThunk(
  'auth/updateName',
  async (name: string) => {
    try {
      await auth().currentUser?.updateProfile({displayName: name});
      return name;
    } catch (error) {
      console.log('Error updating email ', error);
    }
  },
);
export const updateImage = createAsyncThunk(
  'auth/updateImage',
  async (uri: string) => {
    try {

      await auth().currentUser?.updateProfile({photoURL: uri});
      return uri;
    } catch (error) {
      console.log('Error updating email ', error);
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (
    {email, currentPassword, newPassword}: ChangePasswordPayload,
    {rejectWithValue},
  ) => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        currentPassword,
      );
      const user = userCredential.user;
      if (user) {
        const credential = auth.EmailAuthProvider.credential(
          email,
          currentPassword,
        );
        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(newPassword);
        return {success: true};
      } else {
        throw new Error('User not found');
      }
    } catch (error: any) {
      console.log(error);
      if (error.code === 'auth/wrong-password' || 'auth/invalid-credential') {
        Snackbar.show({
          text: 'Invalid current password',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
      return rejectWithValue(error.message);
    }
  },
);

export const signUpWithGoogle = createAsyncThunk(
  'auth/signUpWithGoogle',
  async (_, {rejectWithValue}) => {
    try {
      GoogleSignin.configure({
        webClientId: GOOGLE_API,
      });
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const response = await auth().signInWithCredential(googleCredential);
      await firestore().collection('Users').doc(response.user.uid).set({
        name: response.user.displayName,
      });

      const user = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        photoURL: response.user.photoURL,
        emailVerified: response.user.emailVerified,
      };

      return user;
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Snackbar.show({
          text: 'Email is already in use',
          duration: Snackbar.LENGTH_LONG,
        });
      }

      if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'That email address is invalid!',
          duration: Snackbar.LENGTH_LONG,
        });
      }
      if (error.code === 'auth/weak-password') {
        Snackbar.show({
          text: 'Choose strong password',
          duration: Snackbar.LENGTH_LONG,
        });
      } else console.log(error);
      return rejectWithValue('Error while sign up');
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async () => {
  await auth().signOut();
});

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });
    builder.addCase(updateName.fulfilled, (state, action) => {
      if (state.user) {
        state.user.displayName = action.payload;
      }
    });
    builder.addCase(updateImage.fulfilled, (state, action) => {
      if (state.user) {
        state.user.photoURL = action.payload;
      }
    });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
