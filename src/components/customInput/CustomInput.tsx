import {TextInput} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';

export const CustomInput = ({
  value,
  placeHolder,
  editable,
  onChange,
}: {
  editable?: boolean;
  value: string;
  placeHolder: string;
  onChange: (i: string) => void;
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor={COLORS.grey}
      onChangeText={text => onChange(text)}
      value={value}
      editable={editable}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
  );
};
