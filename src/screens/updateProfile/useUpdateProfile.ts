import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {
  updateEmail,
  updateImage,
  updateName,
} from '../../redux/slices/authSlice';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {launchImageLibrary} from 'react-native-image-picker';
import {isValidEmail} from '../../utils/utils';

export const useUpdateProfile = () => {
  const emailEditable = !(auth().currentUser?.providerId === 'google.com');
  const refresh = async () => {
    try {
      await auth().currentUser?.reload();
      const user = await auth().currentUser;
      console.log('user after refresh ', user);
    } catch (error) {
      console.log('Error in reloading user ', error);
    }
  };
  refresh();
  console.log('email edit or not ', emailEditable);

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.auth.user);

  console.log('user is in profile update ', user);
  const [email, setEmail] = useState(user?.email as string);
  const [name, setName] = useState(user?.displayName as string);
  const [image, setImage] = useState('');
  const onChangeName = (e: string) => {
    setName(e);
  };
  const onChangeEmail = (e: string) => {
    setEmail(e);
  };
  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        response.assets &&
        response.assets[0].uri &&
        response.assets.length > 0
      ) {
        setImage(response.assets[0].uri);

        console.log('image uri  ', response.assets[0].uri);
      }
    });
  };

  const onPressUpdate = async () => {
    setLoading(true);
    if (name !== user?.displayName && name) {
      const res = await dispatch(updateName(name));
      if (res.meta.requestStatus === 'fulfilled') {
        Snackbar.show({
          text: 'Information Updated',
          backgroundColor: 'green',
        });
      } else {
        Snackbar.show({
          text: 'Error Updating',
          backgroundColor: 'green',
        });
      }
    }
    if (email !== user?.email) {
      if (!isValidEmail(email)) {
        Snackbar.show({
          text: 'Invalid Email Address',
          backgroundColor: 'red',
        });
      } else {
        const res = await dispatch(updateEmail(email));
        if (res.meta.requestStatus === 'fulfilled') {
          Snackbar.show({
            text: 'Verification email sent. Check your inbox for confirmation.',
            backgroundColor: 'green',
          });
        }
      }
    }
    if (image) {
      const res = await dispatch(updateImage(image));
      if (res.meta.requestStatus === 'fulfilled') {
        Snackbar.show({
          text: 'Information Updated',
          backgroundColor: 'green',
        });
      }
    }
    setLoading(false);
  };
  return {
    onPressUpdate,
    onChangeEmail,
    onChangeName,
    handleImagePicker,
    image,
    emailEditable,
    loading,
    user,
    name,
    email,
  };
};
