import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StackNavigationOptions} from '@react-navigation/stack';
import dayjs from 'dayjs';

export type AttachmentModelProps = {
  visible: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onImagePress: () => void;
  onDocumentPress: () => void;
};
export type NavigateToDetailTransaction = {
  id: string | undefined;
  type: 'income' | 'expense';
  description: string;
  url: string | null | undefined;
  amount: number;
  date: string;
  category: string;
};
export type voidFunction = () => void;
export type PieChartProps = {
  data: {
    amount: number;
    color: string;
  }[];
};

export type AuthScreenOptions = {
  name: string;
  component: () => React.JSX.Element;
  options: {
    title: string;
    headerTitleAlign: 'center' | 'left' | undefined;
    headerTitleStyle: {
      fontSize: number;
    };
  };
}[];
export type TransactionCardProps = {
  icon?: React.JSX.Element;
  category: string;
  description: string;
  type: 'income' | 'expense';
  time: string;
  amount: string;
};
export type FilterTransactionsProps = {
  filterBy: FilterByType;
  sortBy: string | null;
  close: voidFunction;
  setFilterBy: React.Dispatch<React.SetStateAction<FilterByType>>;
  setSortBy: React.Dispatch<React.SetStateAction<SortByType>>;
};

export type useFilterTransactionsProps = {
  setFilterBy: React.Dispatch<React.SetStateAction<FilterByType>>;
  setSortBy: React.Dispatch<React.SetStateAction<SortByType>>;
};
export type SortByType = 'highest' | 'lowest' | 'newest' | 'oldest' | null;
export type FilterByType = 'income' | 'expense' | null;
export type TransactionStatusModalProps = {
  transactionStatus: string;
  isVisible: boolean;
  onClose: () => void;
};
export type LineGraphProps = {
  transactions: TransactionType[];
  filterBy: 'today' | 'week' | 'month' | 'year';
};
export type AuthStateType = {
  user: Partial<FirebaseAuthTypes.User> | null;
};
export type ScreenConfig = {
  name: keyof StackNavigatorParamList;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
};
export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  VerifyEmail: undefined;
  ForgetPassword: undefined;
};
export type ChangePasswordPayload = {
  email: string;
  currentPassword: string;
  newPassword: string;
};
export type TransactionType = {
  uid: string;
  type: 'expense' | 'income';
  category: string;
  amount: number;
  date?: dayjs.ConfigType | Date;
  id?: string | undefined;
  attachment_url?: string | null;
  description: string;
};
export type TabConfig = {
  name: keyof TabParamsList;
  component: React.ComponentType<any>;
  options?: BottomTabNavigationOptions;
};

export type StackNavigatorParamList = {
  Tab: undefined;
  Income: undefined;
  Expense: undefined;
  'Financial Report': undefined;
  'Detail Transaction': {
    headerColor: string;
    id: string | undefined;
    date: string;
    type: 'income' | 'expense';
    url: string | null | undefined;
    category: string;
    description: string;
    amount: string;
  };
  'Update Profile': undefined;
  Currency: undefined;
  Settings: undefined;
  'Reset Password': undefined;
};
export type DetailTransactionProps = NativeStackScreenProps<
  StackNavigatorParamList,
  'Detail Transaction'
>;

export type StackNavigationProp =
  NativeStackNavigationProp<StackNavigatorParamList>;
export type TabParamsList = {
  Home: undefined;
  Transaction: undefined;
  AddTransaction: undefined;
  Budget: undefined;
  Profile: undefined;
};
export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export type TabNavigationProps = BottomTabNavigationProp<TabParamsList>;

export type TransactionsSliceType = {
  transactions: TransactionType[];
  loading: boolean;
  currency: string;
};
export type CategoryColors = {
  [key: string]: string;
};
export type BarGraphProps = {
  total: number;
  item: CategoryData;
  type: 'income' | 'expense';
};
export type CategoryData = {
  amount: number;
  color: string;
  category: string;
};

export type FinancialReportResult = {
  currency: string | number;
  expenses: CategoryData[];
  incomes: CategoryData[];
  totalExpense: string;
  totalIncome: string;
};
