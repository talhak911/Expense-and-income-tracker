import {useState, useMemo} from 'react';
import {useAppSelector} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/color';
import dayjs from 'dayjs';
import {
  DetailTransactionProps,
  FilterByType,
  NavigateToDetailTransaction,
  SortByType,
  StackNavigationProp,
} from '../../types/types';

export const useTransaction = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const transactions = useAppSelector(state => state.transactions.transactions);
  const [modelVisible, setModelVisible] = useState(false);
  const [filterBy, setFilterBy] = useState<FilterByType>(null);
  const [sortBy, setSortBy] = useState<SortByType>('newest');

  const navigateToDetailTransaction = ({
    id,
    type,
    description,
    url,
    amount,
    date,
    category,
  }: NavigateToDetailTransaction) => {
    navigation.navigate('Detail Transaction', {
      headerColor: type === 'income' ? COLORS.green : COLORS.red,
      id,
      date,
      type,
      url,
      category,
      description,
      amount: amount.toString(),
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

  const periodOrder = [
    'Today',
    'Yesterday',
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
    'Older',
  ];
  const groupedTransactions = useMemo(() => {
    const grouped = filteredSortedTransactions.reduce((acc, transaction) => {
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

    const sortedGrouped = periodOrder.reduce((acc, period) => {
      if (grouped[period]) {
        acc[period] = grouped[period];
      }
      return acc;
    }, {} as Record<string, typeof filteredSortedTransactions>);

    if (sortBy === 'oldest') {
      const reversedGrouped = periodOrder.reverse().reduce((acc, period) => {
        if (sortedGrouped[period]) {
          acc[period] = sortedGrouped[period];
        }
        return acc;
      }, {} as Record<string, typeof filteredSortedTransactions>);

      return reversedGrouped;
    }

    return sortedGrouped;
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
