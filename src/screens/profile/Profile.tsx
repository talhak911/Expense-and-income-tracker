import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useProfile} from './useProfile.tsx';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import EditIcon from '../../assets/icons/edit';
import {FontSize, Height, Width} from '../../utils/responsive';
import SettingIcon from '../../assets/icons/setting';
import ForgetIcon from '../../assets/icons/resetPassword';
import ResetPasswordIcon from '../../assets/icons/resetPassword';
import LogoutIcon from '../../assets/icons/logout';
import { BottomModel } from '../../components/bottomModel/BottomModel';

export default function Profile() {
  const {signOutUser, navigateToUpdateProfile,navigateToResetPassword,closeModal,logoutModalVisible,showModal,ConfirmLogoutModal} = useProfile();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.almostWhite}}>
      {/* <Button
        title="signout"
        onPress={() =>
          signOutUser()
        }
      /> */}
      <ScrollView>
        <View
          style={{
            marginTop: Height(4),
            paddingLeft: Width(8),
            paddingRight: Width(4),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              gap: 16,
              alignItems: 'center',
            }}>
            <View style={styles.imageBorder}>
              <View style={styles.image} />
            </View>
            <View>
              <Text style={{color: COLORS.grey}}>Username</Text>
              <Text
                style={{
                  fontWeight: '600',
                  color: COLORS.charcoal,
                  fontSize: FontSize(24),
                }}>
                Username
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={navigateToUpdateProfile}>
            <EditIcon />
          </TouchableOpacity>
        </View>

        <View
          style={{flex: 1, gap: 2, marginTop: 40, marginHorizontal: Width(5)}}>
          <TouchableOpacity
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
          {logoutModalVisible && <BottomModel onClose={closeModal} visible={logoutModalVisible} element={<ConfirmLogoutModal/>}/>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBorder: {
    borderColor: COLORS.deepPurple,
    borderRadius: Width(11),
    borderWidth: 2,
    padding: 3,
  },
  image: {
    width: Width(19),
    height: Width(19),
    backgroundColor: 'orange',
    borderRadius: Width(9.5),
  },
  menus: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    paddingLeft: 17,
    paddingTop: 18,
    paddingBottom: 19,
  },
  menuText: {
    color: COLORS.black25,
    fontSize: 16,
  },
});
