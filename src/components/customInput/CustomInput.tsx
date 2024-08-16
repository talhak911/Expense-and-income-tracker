import {TextInput} from 'react-native';

import {StyleSheet} from 'react-native';

import {styles} from "./styles"
import { COLORS } from '../../constants/colors';
export const CustomInput = ({
  value,
  placeHolder,
  onChange,
}: {
  value: string;
  placeHolder:string,
  onChange: (i: string) => void;
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      placeholderTextColor={COLORS.grey}
      onChangeText={text => onChange(text)}
      value={value}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 56,
//     borderRadius: 16,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: '#F1F1FA',
//     //marginTop: 24,
//     // marginBottom: 24,
//     marginLeft: 16,
//     marginRight: 16,
//     paddingLeft: 16,
//   },
// });
