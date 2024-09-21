import {TextInput} from 'react-native';
import {styles} from './CustomInputStyles';
import {COLORS} from '../../constants/color';
import { CustomInputProps } from '../../types/types';

export const CustomInput = ({
  value,
  placeHolder,
  editable,
  onChange,
  secureInput
}: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      secureTextEntry={secureInput}
      placeholderTextColor={COLORS.grey}
      onChangeText={text => onChange(text)}
      value={value}
      editable={editable}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
  );
};
