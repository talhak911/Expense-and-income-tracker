import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSignUp} from './useSignUp';
import GoogleIcon from '../../assets/icons/google';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {PasswordInput} from '../../components/passwordInput/PasswordInput';
import {Checkbox} from '../../components/ui/CheckBox';
import {CustomInput} from '../../components/ui/CustomInput';

export const SignUp = () => {
  const {
    onSignUpPress,
    onSignInPress,
    setEmail,
    setName,
    setPassword,
    signInWithGoogle,
    password,
    email,
    name,
    loading,
    isChecked,
    setIsChecked,
  } = useSignUp();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 30,
      }}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <CustomInput onChange={setName} placeHolder="Name" value={name} />
        <CustomInput onChange={setEmail} placeHolder="E-mail" value={email} />
        <PasswordInput value={password} onChange={setPassword} />

        {loading ? (
          <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
            Loading
          </Text>
        ) : (
          <>
            <Checkbox checked={isChecked} onChange={setIsChecked} />

            <TouchableOpacity
              disabled={loading}
              style={styles.button}
              onPress={() => onSignUpPress()}>
              <Text style={styles.buttonTitle}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{alignSelf:"center",marginVertical:12,fontSize:14,color:"#91919F"}}>or</Text>
            <TouchableOpacity
              disabled={loading}
              style={styles.buttonGoogle}
              onPress={() => signInWithGoogle()}>
              <GoogleIcon />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Sign in with google
              </Text>
            </TouchableOpacity>
          </>
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
