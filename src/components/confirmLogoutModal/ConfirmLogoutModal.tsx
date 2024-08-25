import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {voidFunction} from '../../types/types';
import {COLORS} from '../../constants/colors';

export const ConfirmLogoutModal = ({
  action,
  close,
}: {
  action: voidFunction;
  close: voidFunction;
}) => (
  <View style={styles.container}>
    <Text style={styles.logoutText}>Logout?</Text>
    <Text style={styles.description}>Are you sure do you wanna logout?</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={close}
        style={[styles.button, {backgroundColor: COLORS.lightPurple}]}>
        <Text style={styles.buttonTextNo}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={action}
        style={[styles.button, {backgroundColor: COLORS.purple}]}>
        <Text style={styles.buttonTextYes}>Yes</Text>
      </TouchableOpacity>
    </View>
  </View>
);
