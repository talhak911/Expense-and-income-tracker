import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../../components/ui/customButton/CustomButtom';
import {CustomInput} from '../../components/ui/customInput/CustomInput';
import {useForgetPassword} from './useForgetPassword';

export default function ForgetPassword() {
  const {email,loading, setEmail, forgetPasswordPress} = useForgetPassword();
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
        paddingTop: 69,
        //paddingHorizontal: 16,
      }}>
      <Text style={styles.heading}>Don’t worry.</Text>
      <Text style={styles.heading}>
        Enter your email and we’ll send you a link to reset your password.
      </Text>

      <CustomInput value={email} placeHolder="E-mail" onChange={setEmail} />

      <CustomButton
        loading={loading}
        onPress={forgetPasswordPress}
        title="Send Email"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {fontWeight: 'semibold', fontSize: 24, color: '#0D0E0F',
    paddingHorizontal: 16,
  },
});
