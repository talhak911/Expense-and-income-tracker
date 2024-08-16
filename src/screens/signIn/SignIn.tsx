import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {useSignIn} from './useSignIn';
import {CustomInput} from '../../components/customInput/CustomInput';
import {PasswordInput} from '../../components/passwordInput/PasswordInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle.tsx/SignUpGoogle';
import { Width } from '../../utils/responsive';

export const SignIn = () => {
  const {
    setPassword,
    setEmail,
    onSignInPress,
    navigateToSignUp,
    setLoading,
    navigateToForgetPassword,
    email,
    password,
    loading,
  } = useSignIn();
  return (
    <View style={styles.container}>
     <View style={{gap:24, marginHorizontal:Width(4)}}>
     <CustomInput value={email} placeHolder="E-mail" onChange={setEmail} />
     <PasswordInput onChange={setPassword} value={password} />
     </View>
      {loading ? (
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Loading
        </Text>
      ) : (
        <View style={{marginTop:40,marginHorizontal:Width(4)}}>
       <View style={{alignItems:'center',width:'100%'}}>

       <CustomButton

loading={loading}
onPress={onSignInPress}
title="Login"
/>
       </View>
        <TouchableOpacity
        onPress={navigateToForgetPassword}
        style={{marginTop:16, alignSelf:"flex-end",marginRight:16}}
        >
          <Text
          style={{fontWeight:"bold",color:"#7F3DFF"}}
          >Forgot Password?</Text>
        </TouchableOpacity>
          <SignUpGoogle loading={loading} setLoading={setLoading} />
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Do not have an account?{' '}
              <Text onPress={navigateToSignUp} style={styles.footerLink}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
