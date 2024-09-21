import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {useResetPassword} from './useResetPassword';
import {styles} from './ResetPasswordStyles';

export default function ResetPassword() {
  const {
    loading,
    canChangePassword,
    fields,
    resetPassword,
  } = useResetPassword();
  if (!canChangePassword) {
    return (
      <View style={styles.container}>
        <Text style={styles.cannotChange}>
          You are logged in via google you can't change password
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          {fields.map((field, index) => (
            <CustomInput
              key={index}
              value={field.value}
              onChange={field.onChange}
              placeHolder={field.placeholder}
              secureInput={field.secureInput}
            />
          ))}
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Change Password"
          loading={loading}
          onPress={resetPassword}
        />
      </View>
    </SafeAreaView>
  );
}
