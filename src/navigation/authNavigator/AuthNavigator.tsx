import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../../screens/signUp/SignUp';
import {SignIn} from '../../screens/signIn/SignIn';
import ForgetPassword from '../../screens/forgetPassword/ForgetPassword';
import {AuthStackParamList} from '../../types/types';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          key={'SignUp'}
          options={{
            title: 'Sign Up',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18},
          }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18},
          }}
        />
        {/* <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{title: 'Verify Email'}}
        /> */}
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: 'Forget Password',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 18},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
