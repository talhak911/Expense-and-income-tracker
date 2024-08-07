import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import { useSignIn } from './useSignIn';
import { CustomInput } from '../../components/ui/CustomInput';
import { PasswordInput } from '../../components/passwordInput/PasswordInput';

export const SignIn = () => {
 const {setPassword,setEmail,onSignInPress,onSignUpPress,email,password} = useSignIn()
  return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'white'}}>
   
   <CustomInput
   value={email}
   placeHolder='E-mail'
   onChange={setEmail}
   />
   <PasswordInput
   onChange={setPassword}
   value={password}
   />
      {/* <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaaaaa"
        onChangeText={text => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      /> */}
      {/* <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      /> */}

      <TouchableOpacity style={styles.button} onPress={() => onSignInPress()}>
        <Text style={styles.buttonTitle}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Do not have an account?
          <Text onPress={onSignUpPress} style={styles.footerLink}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};
