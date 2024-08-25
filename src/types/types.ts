import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import dayjs from 'dayjs';

export type AttachmentModelProps = {
  visible: boolean;
  onClose: () => void;
  onCameraPress: () => void;
  onImagePress: () => void;
  onDocumentPress: () => void;
};

export type voidFunction = () => void;

export type TransactionCardProps = {
  icon?: React.JSX.Element;
  category: string;
  description: string;
  type: 'income' | 'expense';
  time: string;
  amount: string;
};

export type TransactionStatusModalProps = {
  transactionStatus: string;
  isVisible: boolean;
  onClose: () => void;
};
export type LineGraphProps = {
  transactions: TransactionType[];
  filterBy: 'today' | 'week' | 'month' | 'year';
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
export type StackNavigatorParamList = {
  Tab: undefined;
  Income: undefined;
  Expense: undefined;
  'Financial Report': undefined;
  'Detail Transaction': {
    headerColor: string;
    id: string;
    date: string;
    type: 'category' | 'expense';
    url: string;
    category: string;
    description: string;
    amount: string;
  };
  'Update Profile': undefined;
  Currency: undefined;
  Settings: undefined;
  'Reset Password': undefined;
};
export type TransactionType = {
  uid: string;
  type: 'expense' | 'income';
  category: string;
  amount: number;
  date?: dayjs.ConfigType | Date;
  id?: string;
  attachment_url?: string | null;
  description: string;
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
  Buget: undefined;
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
  expenses: CategoryData[];
  incomes: CategoryData[];
  totalExpense: string;
  totalIncome: string;
};
