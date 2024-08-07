import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_API} from '@env';
export type AuthStateType = {
  user: Partial<FirebaseAuthTypes.User> | null;
};
const initialState: AuthStateType = {
  user: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue, dispatch},
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
              auth().signOut();
            },
            textColor: 'yellow',
          },
        });
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
        Snackbar.show({
          text: 'Invalid email or password',
          duration: Snackbar.LENGTH_SHORT,
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
      await userToSave.sendEmailVerification();
      await firestore().collection('Users').doc(userToSave.uid).set({
        name,
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
          backgroundColor: 'red',
        });
      }

      if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'That email address is invalid!',
          duration: Snackbar.LENGTH_LONG,
           backgroundColor:"red"
        });
      }
      if (error.code === 'auth/weak-password') {
        Snackbar.show({
          text: 'Choose strong password',
          duration: Snackbar.LENGTH_LONG,
           backgroundColor:"red"
        });
      } else console.log(error);
      return rejectWithValue('Error while sign up');
    }
  },
);

export const signUpWithGoogle = createAsyncThunk(
  'auth/signUpWithGoogle',
  async (_, {rejectWithValue}) => {
    try {
      console.log('running');
      GoogleSignin.configure({
        webClientId: GOOGLE_API,
      });
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signOut.fulfilled, state => {
      state.user = null;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
