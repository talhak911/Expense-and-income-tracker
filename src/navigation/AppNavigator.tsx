// import { NavigationContainer } from '@react-navigation/native';
// import BottomNavigator from '../../src/navigation/BottomNavigator';
// import AuthNavigator from '../../src/navigation/AuthNavigator';
// import SplashScreen from 'react-native-splash-screen';
// import auth from '@react-native-firebase/auth'
// import React, { useEffect } from 'react';
// import { useAppSelector } from '../hooks/useStore';

// export default function AppNavigator() {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);
//   // const user = useAppSelector(state => state.auth.user);
//    auth().onAuthStateChanged((user) => {
//     if (user?.emailVerified) {
// return <BottomNavigator />
//     } else {
//       return    <AuthNavigator />
//     }
//   })

 

  // if (!user || !user.emailVerified) return <AuthNavigator />;
  // return <BottomNavigator />;
//}
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../../src/navigation/BottomNavigator';
import AuthNavigator from '../../src/navigation/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchTransactions } from '../redux/slices/transactionsSlice';
import { setUser } from '../redux/slices/authSlice';

export default function AppNavigator() {
  const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const user = useAppSelector(state=>state.auth.user)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
     if(user){
      const userToSet = {
        uid: user?.uid,
        email:user?.email,
        displayName:user?.displayName,
        photoURL:user?.photoURL,
        emailVerified:user?.emailVerified,
      };
      dispatch(setUser(userToSet))
    ;
      dispatch(fetchTransactions(user?.uid))
     }
     setInitializing(false)
    });

    return subscriber;
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (initializing) return null;

  return (

      user && user.emailVerified ? <BottomNavigator /> : <AuthNavigator />

  );
}

