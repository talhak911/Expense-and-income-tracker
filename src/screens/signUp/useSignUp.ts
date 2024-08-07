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

  const [isChecked,setIsChecked]=useState(false)
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

  const onSignUpPress = async () => {
    try {
      setLoading(true);
      if (!email || !name || !password) {
        Snackbar.show({
          text:"All fields are required",
          duration:Snackbar.LENGTH_SHORT,
           backgroundColor:"red"
        })
      }else if(!isChecked){
        Snackbar.show({
          text:"Make sure you agree to Privacy Policy",
          duration:Snackbar.LENGTH_SHORT,
          backgroundColor:"red"
          
        })
      }
      else{
       const res= await dispatch(signUp({name,email,password}))
        if (res.meta.requestStatus==="fulfilled"){
          Snackbar.show({
            text:"Verify your email then Sign In",
            duration:Snackbar.LENGTH_LONG,
            backgroundColor:"green"
          })
          setName("")
          setEmail("")
          setPassword("")
        }
        // navigation.navigate("VerifyEmail")
      }
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  };

  return {
    onSignUpPress,
    onSignInPress,
    setName,
    setEmail,
    setPassword,
    signInWithGoogle,
    setIsChecked,
    isChecked,
    password,
    loading,
    name,
    email,
  };
};
