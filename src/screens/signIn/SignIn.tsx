import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {useSignIn} from './useSignIn';
import {CustomInput} from '../../components/ui/customInput/CustomInput';
import {PasswordInput} from '../../components/passwordInput/PasswordInput';
import {CustomButton} from '../../components/ui/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle.tsx/SignUpGoogle';

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
      <CustomInput value={email} placeHolder="E-mail" onChange={setEmail} />
      <PasswordInput onChange={setPassword} value={password} />
      {loading ? (
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Loading
        </Text>
      ) : (
        <>
          <CustomButton
            loading={loading}
            onPress={onSignInPress}
            title="Login"
          />
        <TouchableOpacity
        onPress={navigateToForgetPassword}
        style={{marginVertical:16, alignSelf:"flex-end",marginRight:16}}
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
        </>
      )}
    </View>
  );
};
