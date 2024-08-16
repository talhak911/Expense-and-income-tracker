import {StyleSheet, Text, View} from 'react-native';
import {CustomButton} from '../../components/customButton/CustomButtom';
import {CustomInput} from '../../components/customInput/CustomInput';
import {useForgetPassword} from './useForgetPassword';
import {FontSize, Height, Width} from '../../utils/responsive';

export default function ForgetPassword() {
  const {email, loading, setEmail, forgetPasswordPress} = useForgetPassword();
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: 'white',
        paddingTop: Width(19), //69
        paddingHorizontal: Width(4),
      }}>
      <Text style={styles.heading}>Don’t worry.</Text>
      <Text style={styles.heading2}>
        Enter your email and we’ll send you a link to reset your password.
      </Text>

      <View
        style={{
          gap: Height(4), //32
        marginTop:Height(6), //46
        // marginTop:46, //46
          alignItems: 'center',
        }}>
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

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'semibold',
    fontSize: FontSize(24), //24
    color: '#0D0E0F',
    //paddingHorizontal: 16,
  },
  heading2: {
    fontWeight: 'semibold',
    fontSize: FontSize(24),
    color: '#0D0E0F',
    // paddingHorizontal: 16,marginBottom:46
  },
});
