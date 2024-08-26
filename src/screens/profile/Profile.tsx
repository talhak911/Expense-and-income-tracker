import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useProfile} from './useProfile.ts';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import EditIcon from '../../assets/icons/edit';
import SettingIcon from '../../assets/icons/setting';
import ResetPasswordIcon from '../../assets/icons/resetPassword';
import LogoutIcon from '../../assets/icons/logout';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {ConfirmLogoutModal} from '../../components/confirmLogoutModal/ConfirmLogoutModal.tsx';
import {styles} from './styles.ts';

export default function Profile() {
  const {
    logoutModalVisible,
    user,
    signOutUser,
    navigateToUpdateProfile,
    navigateToResetPassword,
    navigateToSettings,
    closeModal,
    showModal,
  } = useProfile();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.topView}>
            <View style={styles.imageBorder}>
              <Image
                source={{
                  uri:
                    user?.photoURL ||
                    'https://th.bing.com/th/id/OIP.7dTfyRneXPY5b7pj0NKuUgAAAA?rs=1&pid=ImgDetMain',
                }}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={{color: COLORS.grey}}>Username</Text>
              <Text style={styles.name}>{user?.displayName}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={navigateToUpdateProfile}>
            <EditIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={navigateToSettings}
            style={[
              styles.menus,
              {borderTopLeftRadius: 24, borderTopRightRadius: 24},
            ]}>
            <SettingIcon />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigateToResetPassword}
            style={styles.menus}>
            <ResetPasswordIcon />
            <Text style={styles.menuText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={showModal}
            style={[
              styles.menus,
              {borderBottomLeftRadius: 24, borderBottomRightRadius: 24},
            ]}>
            <LogoutIcon />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
          {logoutModalVisible && (
            <BottomModel
              onClose={closeModal}
              visible={logoutModalVisible}
              element={
                <ConfirmLogoutModal close={closeModal} action={signOutUser} />
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
