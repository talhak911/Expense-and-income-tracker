import {signOut} from '../../redux/slices/authSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {StackNavigationProp} from '../../types/types';

export const useProfile = () => {
  const user = useAppSelector(state => state.auth.user);
  const [logoutModalVisible, setLogoutModelVisible] = useState(false);
  const closeModal = () => {
    setLogoutModelVisible(false);
  };
  const showModal = () => {
    setLogoutModelVisible(true);
  };
  const navigation = useNavigation<StackNavigationProp>();
  const dispatch = useAppDispatch();

  const signOutUser = async () => {
    await dispatch(signOut());
  };
  const navigateToUpdateProfile = () => {
    navigation.navigate('Update Profile');
  };
  const navigateToResetPassword = () => {
    navigation.navigate('Reset Password');
  };
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  return {
    navigateToUpdateProfile,
    navigateToResetPassword,
    signOutUser,
    showModal,
    navigateToSettings,
    closeModal,
    user,
    logoutModalVisible,
  };
};
