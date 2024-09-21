import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import { useAppDispatch } from '../../hooks/useStore';
import { forgetPassword } from '../../redux/slices/authSlice';
import { isValidEmail } from '../../utils/utils';

export const useForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  const forgetPasswordPress = async () => {
    try {
      if (!email) {
        Snackbar.show({
          text: 'Enter your Email',
          backgroundColor: 'red',
        });
      } else if(!isValidEmail(email)){
           Snackbar.show({
          text: 'Email is not valid',
          backgroundColor: 'red',
        });
      }else {
        setLoading(true);
        const res =await dispatch(forgetPassword(email))
        if(res.meta.requestStatus==='fulfilled'){
          setEmail('')
        }
      }
    } catch (error: any) {
      console.log("error in forget password ",error)
      if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'Invalid Email address',
          backgroundColor: 'red',
        });
      } else if (error.code === 'auth/user-not-found') {
        Snackbar.show({
          text: 'No user found',
          backgroundColor: 'red',
        });
      } else if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'Invalid Email',
          backgroundColor: 'red',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    setEmail,
    forgetPasswordPress,
  };
};
