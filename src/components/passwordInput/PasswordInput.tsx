import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {usePasswordInput} from './usePasswordInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontSize, Height, Width} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import { styles } from './styles';

export const PasswordInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (input: string) => void;
}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    usePasswordInput();

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        placeholderTextColor={'#91919F'}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        value={value}
        enablesReturnKeyAutomatically
        onChangeText={text => {
          onChange(text);
        }}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color={COLORS.grey} />
      </Pressable>
    </View>
  );
};
