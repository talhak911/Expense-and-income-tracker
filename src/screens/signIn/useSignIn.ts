import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {useAppDispatch} from '../../hooks/useStore';
import {signIn} from '../../redux/slices/authSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
export const useSignIn = () => {

  type SignInNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<SignInNavigationProp>();
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const navigateToForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };
  const [email, setEmail] = useState('');
  const [loading,setLoading]=useState(false)
  const [password, setPassword] = useState('');
  const onSignInPress = async () => {
    try {
      setLoading(true)
      if (!email || !password) {
        Snackbar.show({
          text: 'Email and Password required',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
        return;
      } else {
        await dispatch(signIn({email, password}));
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
        Snackbar.show({
          text: 'Invalid email or password',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      } else {
        Snackbar.show({
          text: error.message,
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: 'red',
        });
      }
    }
    finally{setLoading(false)}
  };

  return {
    setEmail,
    setPassword,
    onSignInPress,
    navigateToSignUp,
    setLoading,
    navigateToForgetPassword,
    email,
    loading,
    password,
  };
};
