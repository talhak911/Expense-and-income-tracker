import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {voidFunction} from '../../types/types';
import {styles} from './styles';

export const DeleteModal = ({
  closeModal,
  action,
}: {
  closeModal: voidFunction;
  action: voidFunction;
}) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Remove This transaction?</Text>
    <Text style={styles.description}>
      Are you sure do you wanna remove this transaction
    </Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={closeModal}
        style={{
          backgroundColor: COLORS.lightPurple,
          ...styles.button,
        }}>
        <Text style={{color: COLORS.purple, fontWeight: '600'}}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={action}
        style={{
          backgroundColor: COLORS.purple,
          ...styles.button,
        }}>
        <Text style={{color: COLORS.white, fontWeight: '600'}}>Yes</Text>
      </TouchableOpacity>
    </View>
  </View>
);
