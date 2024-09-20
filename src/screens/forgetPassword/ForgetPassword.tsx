import {Text, View} from 'react-native';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {CustomInput} from '../../components/customInput/CustomInput';
import {useForgetPassword} from './useForgetPassword';
import {styles} from './ForgetPasswordStyles';

export default function ForgetPassword() {
  const {email, loading, setEmail, forgetPasswordPress} = useForgetPassword();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Don’t worry.</Text>
      <Text style={styles.heading}>
        Enter your email and we’ll send you a link to reset your password.
      </Text>

      <View style={styles.content}>
        <CustomInput value={email} placeHolder="Email" onChange={setEmail} />

        <CustomButton
          loading={loading}
          onPress={forgetPasswordPress}
          title="Send Email"
        />
      </View>
    </View>
  );
}
