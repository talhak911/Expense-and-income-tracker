import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../types/types';
import {AUTH_SCREENS} from '../../constants/constants';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
        {AUTH_SCREENS.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name as keyof AuthStackParamList}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
