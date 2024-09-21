import {Pressable, TextInput, View} from 'react-native';
import {styles} from './CustomInputStyles';
import {COLORS} from '../../constants/color';
import { CustomInputProps } from '../../types/types';
import { useCustomInput } from './useCustomInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomInput = ({
  value,
  placeHolder,
  editable = true,
  onChange,
  secureInput = false,
}: CustomInputProps) => {
  const {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  } = useCustomInput();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder={placeHolder}
        secureTextEntry={secureInput ? passwordVisibility : false}
        placeholderTextColor={COLORS.grey}
        onChangeText={onChange}
        value={value}
        editable={editable}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      {secureInput && (
        <Pressable onPress={handlePasswordVisibility} >
          <MaterialCommunityIcons
            name={rightIcon}
            size={22}
            color={COLORS.grey}
          />
        </Pressable>
      )}
    </View>
  );
};
