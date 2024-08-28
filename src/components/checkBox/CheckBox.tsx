import {Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {COLORS} from '../../constants/color';

export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: boolean) => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checked)}
      activeOpacity={0.7}>
      <View style={styles.checkbox}>
        {checked && (
          <MaterialCommunityIcons name="check" size={18} color={COLORS.purple} />
        )}
      </View>
      <Text style={styles.label}>
        By signing up, you agree to the{' '}
        <Text style={{color: COLORS.purple}}>
          Terms of Service and Privacy Policy
        </Text>
      </Text>
    </TouchableOpacity>
  );
};
