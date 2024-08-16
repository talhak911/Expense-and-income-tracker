import {signOut} from '../../redux/slices/authSlice';
import {useAppDispatch} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FontSize, Height, Width } from '../../utils/responsive';

export const useProfile = () => {
  const ConfirmLogoutModal = () => (
    <View style={{alignItems: 'center', gap: Height(1)}}>
      <Text
        style={{
          color: COLORS.charcoal,
          fontSize: FontSize(18),
          fontWeight: '600',
        }}>
        Logout?
      </Text>
      <Text
        style={{
          fontSize: FontSize(16),
          color: COLORS.grey,
          textAlign: 'center',
        }}>
      Are you sure do you wanna logout?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 16,
        }}>
        <TouchableOpacity
          onPress={closeModal}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightPurple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}>
          <Text style={{color: COLORS.purple, fontWeight: '600'}}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={signOutUser}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.purple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}>
          <Text style={{color: COLORS.white, fontWeight: '600'}}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const [logoutModalVisible, setLogoutModelVisible] = useState(false);
  const closeModal = () => {
    setLogoutModelVisible(false);
  };
  const showModal = () => {
    setLogoutModelVisible(true);
  };
  const navigation = useNavigation();
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
  return {
    navigateToUpdateProfile,
    navigateToResetPassword,
    ConfirmLogoutModal,
    signOutUser,
    showModal,
    closeModal,
    logoutModalVisible,
  };
};
