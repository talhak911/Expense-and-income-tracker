import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './SignInStyles';
import {useSignIn} from './useSignIn';
import {CustomInput} from '../../components/customInput/CustomInput';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {SignUpGoogle} from '../../components/signUpGoogle/SignUpGoogle';
import {Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';
import {SIGN_IN_FIELDS} from '../../constants/inputFields';

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
      <View style={styles.containerContent}>
        {SIGN_IN_FIELDS(email, setEmail, password, setPassword).map(
          (field, index) => (
            <CustomInput
              key={index}
              value={field.value}
              onChange={field.onChange}
              placeHolder={field.placeholder}
              secureInput={field.secureTextEntry}
            />
          ),
        )}
      </View>
      {loading ? (
        <View style={{marginTop: 16}}>
          <ActivityIndicator size="large" color={COLORS.purple} />
        </View>
      ) : (
        <View style={{marginTop: 40, marginHorizontal: Width(4)}}>
          <View style={{alignItems: 'center'}}>
            <CustomButton
              loading={loading}
              onPress={onSignInPress}
              title="Login"
            />
          </View>
          <TouchableOpacity
            onPress={navigateToForgetPassword}
            style={styles.forgetPasswordContainer}>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <SignUpGoogle loading={loading} setLoading={setLoading} />
          </View>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Do not have an account?
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
