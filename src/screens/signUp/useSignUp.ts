import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { useAppDispatch } from '../../hooks/useStore';
import { signUp, signUpWithGoogle } from '../../redux/slices/authSlice';

export const useSignUp = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation();
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
  await dispatch(signUpWithGoogle())
    } catch (error) {
      console.log('google sign in error', error);
    } finally {
      setLoading(false);
    }
  };

  const onRegisterPress = async () => {
    try {
      setLoading(true);
      if (!email || !name || !password) {
        Snackbar.show({
          text:"All fields are required",
          duration:Snackbar.LENGTH_SHORT
        })
      }
      else{
        await dispatch(signUp({name,email,password}))
        navigation.navigate("VerifyEmail")
      }
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  };

  return {
    onRegisterPress,
    onSignInPress,
    setName,
    setEmail,
    setPassword,
    signInWithGoogle,
    password,
    loading,
    name,
    email,
  };
};
