import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSignUp} from './useSignUp';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {PasswordInput} from '../../components/passwordInput/PasswordInput';
import {Checkbox} from '../../components/checkBox/CheckBox';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle.tsx/SignUpGoogle';
import {Width} from '../../utils/responsive';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { AuthStackParamList } from '../../navigation/AuthNavigator';
// type SignUpProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

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
      <KeyboardAwareScrollView
        // style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <View style={styles.gap}>
          <CustomInput onChange={setName} placeHolder="Name" value={name} />
          <CustomInput onChange={setEmail} placeHolder="E-mail" value={email} />
          <PasswordInput value={password} onChange={setPassword} />
        </View>
        {loading ? (
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Loading
          </Text>
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
