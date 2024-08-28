import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/useStore';
import {COLORS} from '../../constants/color';
import {StackNavigationProp, TabNavigationProps} from '../../types/types';

export const useRecentTransactions = () => {
  const navigationToStack = useNavigation<StackNavigationProp>();
  const navigationToTab = useNavigation<TabNavigationProps>();
  const navigateToTransactions = () => {
    navigationToTab.navigate('Transaction');
  };
  const navigateToDetailTransaction = ({
    id,
    type,
    description,
    url,
    amount,
    date,
    category,
  }: any) => {
    navigationToStack.navigate('Detail Transaction', {
      headerColor: type === 'income' ? COLORS.green : COLORS.red,
      id,
      date,
      type,
      url,
      category,
      description,
      amount,
    });
  };
  const transaction = useAppSelector(
    state => state.transactions.transactions,
  ).slice(0, 4);
  const transactions = transaction.map(transaction => ({
    ...transaction,
    date: new Date(transaction.date as string),
  }));
  return {
    transactions,
    navigateToTransactions,
    navigateToDetailTransaction,
  };
};
