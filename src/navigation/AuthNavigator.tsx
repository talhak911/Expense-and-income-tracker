import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/signUp/SignUp';
import {SignIn} from '../screens/signIn/SignIn';
import { VerifyEmail } from '../screens/verifyEmail/VerifyEmail';

export default function AuthNavigator() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          key={"SignUp"}
          options={{
            title: 'Sign Up',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18}
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign in'}}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{title: 'Verify Email'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
