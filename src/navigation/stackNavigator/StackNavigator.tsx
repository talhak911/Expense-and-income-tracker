import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddIncome from '../../screens/addIncome/AddIncome';
import AddExpense from '../../screens/addExpense/AddExpense';
import {COLORS} from '../../constants/colors';
import BackIcon from '../../assets/icons/back';
import FinancialReport from '../../screens/financialReport/FinancialReport';
import DetailTransaction from '../../screens/detailTransaction/DetailTransaction';
import UpdateProfile from '../../screens/updateProfile/UpdateProfile';
import ResetPassword from '../../screens/resetPassword/ResetPassword';
import {TabNavigator} from '../tabNavigator/TabNavigator';
import Settings from '../../screens/settings/Settings';
import {StackNavigatorParamList} from '../../types/types';
import Currency from '../../screens/currency/Currency';

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
        <Stack.Screen
          name="Tab"
          options={{headerShown: false}}
          component={TabNavigator}
        />
        <Stack.Screen
          options={{headerStyle: {backgroundColor: COLORS.green}}}
          name="Income"
          component={AddIncome}
        />
        <Stack.Screen
          options={{headerStyle: {backgroundColor: COLORS.red}}}
          name="Expense"
          component={AddExpense}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: COLORS.black50},
            headerLeftContainerStyle: {paddingLeft: 16},
            headerBackImage: () => <BackIcon currentColor="black" />,
          }}
          name="Financial Report"
          component={FinancialReport}
        />
        <Stack.Screen name="Detail Transaction" component={DetailTransaction} />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: COLORS.black50},
            headerLeftContainerStyle: {paddingLeft: 16},
            headerBackImage: () => <BackIcon currentColor="black" />,
          }}
          name="Update Profile"
          component={UpdateProfile}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: COLORS.black50},
            headerShadowVisible: true,
            headerLeftContainerStyle: {paddingLeft: 16},
            headerBackImage: () => <BackIcon currentColor="black" />,
          }}
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: COLORS.black50},
            headerShadowVisible: true,
            headerLeftContainerStyle: {paddingLeft: 16},
            headerBackImage: () => <BackIcon currentColor="black" />,
          }}
          name="Currency"
          component={Currency}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: COLORS.black50},
            headerLeftContainerStyle: {paddingLeft: 16},
            headerBackImage: () => <BackIcon currentColor="black" />,
          }}
          name="Reset Password"
          component={ResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
