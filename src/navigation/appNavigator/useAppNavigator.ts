import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {setUser} from '../../redux/slices/authSlice';
import {
  fetchCurrency,
  fetchTransactions,
} from '../../redux/slices/transactionsSlice';
import auth from '@react-native-firebase/auth';
import SplashScreen from 'react-native-splash-screen';
export const useAppNavigator = () => {
  const [initializing, setInitializing] = useState(true);
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    SplashScreen.hide();
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        const userToSet = {
          uid: user?.uid,
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
          emailVerified: user?.emailVerified,
        };
        dispatch(setUser(userToSet));
        dispatch(fetchCurrency());
        dispatch(fetchTransactions(user?.uid));
      } else {
        dispatch(setUser(false));
      }
      setInitializing(false);
    });

    return subscriber;
  }, []);

  return {
    initializing,
    user,
  };
};

