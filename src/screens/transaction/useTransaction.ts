import {useState, useMemo} from 'react';
import {useAppSelector} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';
import dayjs from 'dayjs';
import {StackNavigationProp} from '../../types/types';

export const useTransaction = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const transactions = useAppSelector(state => state.transactions.transactions);
  const [modelVisible, setModelVisible] = useState(false);
  const [filterBy, setFilterBy] = useState<'income' | 'expense' | null>(null);
  const [sortBy, setSortBy] = useState<
    'highest' | 'lowest' | 'newest' | 'oldest'
  >('newest');

  const navigateToDetailTransaction = ({
    id,
    type,
    description,
    url,
    amount,
    date,
    category,
  }: any) => {
    navigation.navigate('Detail Transaction', {
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

  const filteredSortedTransactions = useMemo(() => {
    let filteredTransactions = transactions.map(transaction => ({
      ...transaction,
      date: new Date(transaction.date as string),
    }));

    if (filterBy) {
      filteredTransactions = filteredTransactions.filter(
        transaction => transaction.type === filterBy,
      );
    }

    if (sortBy === 'highest') {
      filteredTransactions = [...filteredTransactions].sort(
        (a, b) => b.amount - a.amount,
      );
    } else if (sortBy === 'lowest') {
      filteredTransactions = [...filteredTransactions].sort(
        (a, b) => a.amount - b.amount,
      );
    } else if (sortBy === 'newest') {
      filteredTransactions = [...filteredTransactions].sort(
        (a, b) => b.date.getTime() - a.date.getTime(),
      );
    } else if (sortBy === 'oldest') {
      filteredTransactions = [...filteredTransactions].sort(
        (a, b) => a.date.getTime() - b.date.getTime(),
      );
    }

    return filteredTransactions;
  }, [transactions, filterBy, sortBy]);

  const groupedTransactions = useMemo(() => {
    return filteredSortedTransactions.reduce((acc, transaction) => {
      const period = dayjs(transaction.date).isSame(dayjs(), 'day')
        ? 'Today'
        : dayjs(transaction.date).isSame(dayjs().subtract(1, 'day'), 'day')
        ? 'Yesterday'
        : dayjs(transaction.date).isSame(dayjs(), 'week')
        ? 'This Week'
        : dayjs(transaction.date).isSame(dayjs().subtract(1, 'week'), 'week')
        ? 'Last Week'
        : dayjs(transaction.date).isSame(dayjs(), 'month')
        ? 'This Month'
        : dayjs(transaction.date).isSame(dayjs().subtract(1, 'month'), 'month')
        ? 'Last Month'
        : 'Older';

      if (!acc[period]) {
        acc[period] = [];
      }
      acc[period].push(transaction);
      return acc;
    }, {} as Record<string, typeof filteredSortedTransactions>);
  }, [filteredSortedTransactions]);

  return {
    modelVisible,
    groupedTransactions,
    navigation,
    filterBy,
    sortBy,
    setSortBy,
    setModelVisible,
    setFilterBy,
    navigateToDetailTransaction,
  };
};
