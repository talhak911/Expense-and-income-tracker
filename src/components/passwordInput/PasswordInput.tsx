import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {usePasswordInput} from './usePasswordInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Height, Width } from '../../utils/responsive';

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
        //   name="password"
        placeholder="Password"
        placeholderTextColor={"#91919F"}
        autoCapitalize="none"
        autoCorrect={false}
        // textContentType="newPassword"
        secureTextEntry={passwordVisibility}
        value={value}
        enablesReturnKeyAutomatically
        onChangeText={text => {
          onChange(text);
        }}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#91919F" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: Height(7),
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    // overflow: 'hidden',
     backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F1F1FA',
   // marginTop: 24,
    // marginLeft: 16,
    // marginRight: 16,
    // paddingLeft: 16,
    // paddingRight: 16,
    //marginHorizontal:Width(4),
    //paddingHorizontal: Width(4), 
  },
  inputField: {
    width: '90%',
    //color:"black",
    paddingLeft: Width(5)
  },
});
