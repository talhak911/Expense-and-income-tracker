import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BackIcon from '../../assets/icons/back';
import {StackNavigatorParamList} from '../../types/types';
import {ScreenConfigs} from '../../constants/constants';

export default function StackNavigator() {
  const Stack = createStackNavigator<StackNavigatorParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {color: 'white'},
          headerLeftContainerStyle: {paddingLeft: 16},
          headerBackImage: () => <BackIcon currentColor="white" />,
        }}>
        {ScreenConfigs.map(({name, component, options}) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
