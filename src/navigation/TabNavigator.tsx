import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/Profile';
import {AddButton} from '../components/addButton/AddButton';
import {COLORS} from '../constants/colors';
import Transaction from '../screens/transaction/Transaction';
import DetailTransaction from '../screens/detailTransaction/DetailTransaction';
import HomeIcon from '../assets/icons/home';
import TransactionBottomIcon from '../assets/icons/transactionBottom';
import {FontSize} from '../utils/responsive';
import BudgetIcon from '../assets/icons/budget';
import ProfileIcon from '../assets/icons/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            marginBottom: 12,
            marginTop: -10,
            fontSize: FontSize(10),
          },
          tabBarStyle: {height: 79, borderTopWidth: 0, elevation: 0},
          tabBarActiveTintColor: COLORS.purple,
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarIcon: ({focused}) => <HomeIcon focused={focused} />}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TransactionBottomIcon focused={focused} />
            ),
          }}
          name="Transaction"
          component={Transaction}
        />
        <Tab.Screen
          name="AddTransaction"
          component={HomeScreen} // Or any other placeholder component
          options={{
            tabBarButton: props => <AddButton props={props} />,
          }}
        />
        <Tab.Screen
          options={{tabBarIcon: ({focused}) => <BudgetIcon focused={focused} />}}
          name="Buget"
          component={DetailTransaction}
        />
        <Tab.Screen
          options={{tabBarIcon: ({focused}) => <ProfileIcon focused={focused} />}}
          name="Settings"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
  };