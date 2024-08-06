import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/Profile';

export default function BottomNavigator (){
    const Tab = createBottomTabNavigator()
return(
    <NavigationContainer>
    <Tab.Navigator
     screenOptions={{headerShadowVisible:false}}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator> 
    </NavigationContainer>
)
};