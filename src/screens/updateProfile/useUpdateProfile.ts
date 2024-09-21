import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {
  updateEmail,
  updateImage,
  updateName,
} from '../../redux/slices/authSlice';
import Snackbar from 'react-native-snackbar';
import {launchImageLibrary} from 'react-native-image-picker';
import {isValidEmail} from '../../utils/utils';
import {uploadAttachment} from '../../utils/uploadAttachment';
import {UPDATE_PROFILE_FIELDS} from '../../constants/inputFields';

export const useUpdateProfile = () => {
  const uid = useAppSelector(state => state.auth.user?.uid);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);
  const [email, setEmail] = useState(user?.email as string);
  const [name, setName] = useState(user?.displayName as string);
  const [image, setImage] = useState<string | null>(null);

  const fields = UPDATE_PROFILE_FIELDS(name, setName, email, setEmail);

  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        response.assets &&
        response.assets[0].uri &&
        response.assets.length > 0
      ) {
        setImage(response.assets[0].uri);
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
    if (image && uid) {
      const uploadedUrl = await uploadAttachment(image, uid);
      if (uploadedUrl) {
        const res = await dispatch(updateImage(uploadedUrl));
        if (res.meta.requestStatus === 'fulfilled') {
          Snackbar.show({
            text: 'Information Updated',
            backgroundColor: 'green',
          });
        }
      }
    }
    setLoading(false);
  };
  return {
    onPressUpdate,
    handleImagePicker,
    fields,
    image,
    loading,
    user,
  };
};
