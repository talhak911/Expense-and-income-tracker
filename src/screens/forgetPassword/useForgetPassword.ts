import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

export const useForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const forgetPasswordPress = async () => {
    try {
      if (!email) {
        Snackbar.show({
          text: 'Enter your Email',
          backgroundColor: 'red',
        });
      } else {
        setLoading(true);
        await auth().sendPasswordResetEmail(email);
        Snackbar.show({
          text: 'Email sent',
          backgroundColor: 'green',
        });
      }
    } catch (error: any) {
      if (error.code === 'auth/invalid-email') {
        Snackbar.show({
          text: 'Invalid Email address',
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
