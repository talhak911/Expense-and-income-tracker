import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { useAppDispatch } from '../../hooks/useStore';
import { signUp, signUpWithGoogle } from '../../redux/slices/authSlice';
import { AuthStackParamList } from '../../navigation/AuthNavigator'; // Adjust path
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SignUpNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;


export const useSignUp = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigation<SignUpNavigationProp>();
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const [isChecked,setIsChecked]=useState(false)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');


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
    setIsChecked,
    setLoading,
    isChecked,
    password,
    loading,
    name,
    email,
  };
};
