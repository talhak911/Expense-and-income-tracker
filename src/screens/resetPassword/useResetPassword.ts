import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {changePassword} from '../../redux/slices/authSlice';
import Snackbar from 'react-native-snackbar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '../../types/types';
import auth from '@react-native-firebase/auth';
import {PASSWORD_RESET_FIELDS} from '../../constants/inputFields';
export const useResetPassword = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const email = useAppSelector(state => state.auth.user?.email);
  const user = auth().currentUser;
  const canChangePassword = !user?.providerData.some(
    provider => provider.providerId === 'google.com',
  );

  const fields = PASSWORD_RESET_FIELDS(
    password,
    setPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
  );
  const resetPassword = async () => {
    try {
      setLoading(true);
      if (email) {
        if (!password || !confirmPassword || !newPassword) {
          Snackbar.show({
            text: 'All field are required',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'red',
          });
        } else if (confirmPassword !== newPassword) {
          Snackbar.show({
            text: 'Confirm password does not match',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'red',
          });
        } else {
          const res = await dispatch(
            changePassword({email, currentPassword: password, newPassword}),
          );
          if (res.meta.requestStatus === 'fulfilled') {
            Snackbar.show({
              text: 'Password changed successfully',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: 'green',
            });
            navigation.navigate('Tab');
          }
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    canChangePassword,
    fields,
    resetPassword,
  };
};
