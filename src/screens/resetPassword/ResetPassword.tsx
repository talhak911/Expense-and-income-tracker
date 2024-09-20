import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {useResetPassword} from './useResetPassword';
import {styles} from './ResetPasswordStyles';

export default function ResetPassword() {
  const {
    confirmPassword,
    newPassword,
    password,
    loading,
    onChangeConfirmPassword,
    onChangeNewPassword,
    onChangePassword,
    resetPassword,
  } = useResetPassword();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <CustomInput
            onChange={onChangePassword}
            placeHolder="Current password"
            value={password}
          />
          <CustomInput
            onChange={onChangeNewPassword}
            placeHolder="New Password"
            value={newPassword}
          />
          <CustomInput
            onChange={onChangeConfirmPassword}
            placeHolder="Retype new password"
            value={confirmPassword}
          />
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
