import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSignUp} from './useSignUp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import {PasswordInput} from '../../components/passwordInput/PasswordInput';
import {Checkbox} from '../../components/checkBox/CheckBox';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle/SignUpGoogle';
import {Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';

export const SignUp = () => {
  const {
    onSignUpPress,
    onSignInPress,
    setEmail,
    setName,
    setPassword,
    setIsChecked,
    setLoading,
    password,
    email,
    name,
    loading,
    isChecked,
  } = useSignUp();
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.gap}>
          <CustomInput onChange={setName} placeHolder="Name" value={name} />
          <CustomInput onChange={setEmail} placeHolder="E-mail" value={email} />
          <PasswordInput value={password} onChange={setPassword} />
        </View>
        {loading ? (
          <View style={{marginTop: 16}}>
            <ActivityIndicator size="large" color={COLORS.purple} />
          </View>
        ) : (
          <View style={{alignItems: 'center', marginHorizontal: Width(4)}}>
            <Checkbox checked={isChecked} onChange={setIsChecked} />

            <CustomButton
              title="Sign Up"
              loading={loading}
              onPress={onSignUpPress}
            />
            <SignUpGoogle loading={loading} setLoading={setLoading} />
          </View>
        )}
        <View style={styles.footerView}>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already got an account?</Text>
            <TouchableOpacity onPress={onSignInPress}>
              <Text style={styles.footerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
