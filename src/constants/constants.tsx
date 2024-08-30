import FoodIcon from '../assets/icons/food';
import SalaryIcon from '../assets/icons/salary';
import ShoppingIcon from '../assets/icons/shopping';
import SubscriptionIcon from '../assets/icons/subscription';
import TransportationIcon from '../assets/icons/transportation';
import {FilterByType, ScreenConfig, SortByType, TabConfig, TabParamsList} from '../types/types';
import AddIncome from '../screens/addIncome/AddIncome';
import AddExpense from '../screens/addExpense/AddExpense';
import FinancialReport from '../screens/financialReport/FinancialReport';
import DetailTransaction from '../screens/detailTransaction/DetailTransaction';
import UpdateProfile from '../screens/updateProfile/UpdateProfile';
import ResetPassword from '../screens/resetPassword/ResetPassword';
import Settings from '../screens/settings/Settings';
import Currency from '../screens/currency/Currency';
import {TabNavigator} from '../navigation/tabNavigator/TabNavigator';
import {COLORS} from './color';
import BackIcon from '../assets/icons/back';
import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/Profile';
import Transaction from '../screens/transaction/Transaction';
import Budget from '../screens/budget/Budget';
import { AddButton } from '../components/addButton/AddButton';
import HomeIcon from '../../assets/icons/home';
import TransactionBottomIcon from '../../assets/icons/transactionBottom';
import BudgetIcon from '../../assets/icons/budget';
import ProfileIcon from '../../assets/icons/profile';

export const Expenses = [
  {icon: <ShoppingIcon />, value: 'Shopping'},
  {icon: <SubscriptionIcon />, value: 'Subscription'},
  {icon: <FoodIcon />, value: 'Food'},
  {icon: <TransportationIcon />, value: 'Transportation'},
];

export const Incomes = [
  {icon: <SalaryIcon />, value: 'Salary'},
  {icon: <SalaryIcon />, value: 'Passive Income'},
];

export const FilterBy: FilterByType[] = ['income', 'expense'];
export const SortBy: SortByType[] = ['highest', 'lowest', 'newest', 'oldest'];
export const Currencies = [
  {currency: 'Pakistan (PKR)', symbol: 'Rs '},
  {currency: 'Japan (JPY)', symbol: '¥'},
  {currency: 'United States (USD)', symbol: '$'},
  {currency: 'Russia (RUB)', symbol: '₽'},
  {currency: 'Germany (EUR)', symbol: '€'},
  {currency: 'Korea (WON)', symbol: '₩'},
];
export const spendFrequencyFilters: {
  name: string;
  filter: 'today' | 'week' | 'month' | 'year';
}[] = [
  {name: 'Today', filter: 'today'},
  {name: 'Week', filter: 'week'},
  {name: 'Month', filter: 'month'},
  {name: 'Year', filter: 'year'},
];

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const Days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const Images = {
  profile: require('../assets/images/profile.jpg'),
};

export const ScreenConfigs: ScreenConfig[] = [
  {name: 'Tab', component: TabNavigator, options: {headerShown: false}},
  {
    name: 'Income',
    component: AddIncome,
    options: {headerStyle: {backgroundColor: COLORS.green}},
  },
  {
    name: 'Expense',
    component: AddExpense,
    options: {headerStyle: {backgroundColor: COLORS.red}},
  },
  {
    name: 'Financial Report',
    component: FinancialReport,
    options: {
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: COLORS.black50},
      headerLeftContainerStyle: {paddingLeft: 16},
      headerBackImage: () => <BackIcon currentColor="black" />,
    },
  },
  {name: 'Detail Transaction', component: DetailTransaction},
  {
    name: 'Update Profile',
    component: UpdateProfile,
    options: {
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: COLORS.black50},
      headerLeftContainerStyle: {paddingLeft: 16},
      headerBackImage: () => <BackIcon currentColor="black" />,
    },
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: COLORS.black50},
      headerShadowVisible: true,
      headerLeftContainerStyle: {paddingLeft: 16},
      headerBackImage: () => <BackIcon currentColor="black" />,
    },
  },
  {
    name: 'Currency',
    component: Currency,
    options: {
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: COLORS.black50},
      headerShadowVisible: true,
      headerLeftContainerStyle: {paddingLeft: 16},
      headerBackImage: () => <BackIcon currentColor="black" />,
    },
  },
  {
    name: 'Reset Password',
    component: ResetPassword,
    options: {
      headerStyle: {backgroundColor: 'white'},
      headerTitleStyle: {color: COLORS.black50},
      headerLeftContainerStyle: {paddingLeft: 16},
      headerBackImage: () => <BackIcon currentColor="black" />,
    },
  },
];

export const TabConfigs: TabConfig[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => <HomeIcon focused={focused} />,
    },
  },
  {
    name: 'Transaction',
    component: Transaction,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => <TransactionBottomIcon focused={focused} />,
    },
  },
  {
    name: 'AddTransaction',
    component: HomeScreen,
    options: {
      tabBarButton: (props: any) => <AddButton props={props} />,
    },
  },
  {
    name: 'Budget',
    component: Budget,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => <BudgetIcon focused={focused} />,
    },
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: boolean }) => <ProfileIcon focused={focused} />,
    },
  },
];

export const TabscreenOptions = {
  tabBarLabelStyle: {
    marginBottom: 12,
    marginTop: -10,
    fontSize: 10,
  },
  tabBarStyle: {height: 70, borderTopWidth: 0, elevation: 0},
  tabBarActiveTintColor: COLORS.purple,
  headerShown: false,
};
