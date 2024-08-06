import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {SignIn} from './screens/signIn/SignIn';
// import BottomNavigator from './src/navigation/BottomNavigator';
// import AuthNavigator from './src/navigation/AuthNavigator';
import {store} from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
// export type RootStackParamsList = {
//   Home: undefined;
//   SignUp: undefined;
//   SignIn: undefined;
//   Login: undefined;
//   Profile: {name: string};
// };

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
