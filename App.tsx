import "react-native-gesture-handler"
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import {SignIn} from './screens/signIn/SignIn';
// import BottomNavigator from './src/navigation/BottomNavigator';
// import AuthNavigator from './src/navigation/AuthNavigator';
import {store,persistor} from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
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
         <PersistGate loading={null} persistor={persistor}>
         <AppNavigator />
      </PersistGate>
    
    </Provider>
  );
}
