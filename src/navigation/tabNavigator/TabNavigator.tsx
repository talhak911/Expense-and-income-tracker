import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamsList} from '../../types/types';
import {TabConfigs, TabscreenOptions} from '../../constants/constants';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator screenOptions={TabscreenOptions}>
      {TabConfigs.map(({name, component, options}) => (
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
