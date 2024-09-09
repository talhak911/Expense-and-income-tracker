import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamsList} from '../../types/types';
import {TAB_CONFIGS, TAB_SCREEN_OPTIONS} from '../../constants/constants';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
      {TAB_CONFIGS.map(({name, component, options}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};
