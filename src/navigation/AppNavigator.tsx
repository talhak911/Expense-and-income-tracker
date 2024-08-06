import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from '../../src/navigation/BottomNavigator';
import AuthNavigator from '../../src/navigation/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import React, {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppSelector} from '../hooks/useStore';

export default function AppNavigator() {
  const user = useAppSelector(state => state.auth.user);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (!user || !user.emailVerified) return <AuthNavigator />;
  return <BottomNavigator />;
}

// import {SignIn} from './screens/signIn/SignIn';

// export default function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

//   function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       //   <NavigationContainer>
//       //   <Stack.Navigator>
//       //     <Stack.Screen
//       //       name="SignUp"
//       //       component={SignUp}
//       //       options={{title: 'SignUp'}}
//       //     />

//       //     <Stack.Screen
//       //       name="SignIn"
//       //       component={SignIn}
//       //       options={{title: 'Sign in'}}
//       //     />
//       //   </Stack.Navigator>
//       // </NavigationContainer>
//       <AuthNavigator />
//     );
//   }
//   {
//     /* <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{title: 'Welcom'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer> */
//   }
//   return <BottomNavigator />;
// }
