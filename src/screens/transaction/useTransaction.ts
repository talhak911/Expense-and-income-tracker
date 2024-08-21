// import {useState} from 'react';
// import {useAppSelector} from '../../hooks/useStore';
// import {useNavigation} from '@react-navigation/native';
// import { COLORS } from '../../constants/colors';

// export const useTransaction = () => {
//   const navigation = useNavigation();
//   const transactions = useAppSelector(state => state.transactions);
//   const navigateToDetailTransaction = ({id, type, description,url, amount,date,category}) => {
//     navigation.navigate('Detail Transaction', {
//       headerColor: type ==="income"?COLORS.green:COLORS.red,
//       id,
//       date,
//       type,
//       url,
//       category,
//       description,
//       amount,
//     });
//   };
//   const [modelVisible, setModelVisible] = useState(false);
//   return {
//     modelVisible,
//     transactions,
//     navigateToDetailTransaction,
//     setModelVisible,
//   };
// };

import {useState, useMemo} from 'react';
import {useAppSelector} from '../../hooks/useStore';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';
import dayjs from 'dayjs';

export const useTransaction = () => {
  const navigation = useNavigation();
  const transactions = useAppSelector(state => state.transactions.transactions);
  const [modelVisible, setModelVisible] = useState(false);
  const [filterBy, setFilterBy] = useState<'income' | 'expense' | null>(null);
  const [sortBy, setSortBy] = useState<'highest' | 'lowest' | 'newest' | 'oldest'>('newest');

  const navigateToDetailTransaction = ({id, type, description, url, amount, date, category}:any) => {
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

  // Memoized filtered and sorted transactions
  const filteredSortedTransactions = useMemo(() => {
    let filteredTransactions = transactions.map(transaction => ({
      ...transaction,
      date: new Date(transaction.date as string), // Convert date back to Date object
    }));
    // Apply filter
    if (filterBy) {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.type === filterBy);
    }
  
    // Apply sorting
    if (sortBy === 'highest') {
      filteredTransactions = [...filteredTransactions].sort((a, b) => b.amount - a.amount);
    } else if (sortBy === 'lowest') {
      filteredTransactions = [...filteredTransactions].sort((a, b) => a.amount - b.amount);
    } else if (sortBy === 'newest') {
      filteredTransactions = [...filteredTransactions].sort((a, b) => b.date.getTime() - a.date.getTime());
    } else if (sortBy === 'oldest') {
      filteredTransactions = [...filteredTransactions].sort((a, b) => a.date.getTime() - b.date.getTime());
    }
  
    return filteredTransactions;
  }, [transactions, filterBy, sortBy]);
  

  // Group transactions by date
  const groupedTransactions = useMemo(() => {
    return filteredSortedTransactions.reduce((acc, transaction) => {
      const transactionDate = dayjs(transaction.date).format('YYYY-MM-DD');
      if (!acc[transactionDate]) {
        acc[transactionDate] = [];
      }
      acc[transactionDate].push(transaction);
      return acc;
    }, {} as Record<string, typeof filteredSortedTransactions>);
  }, [filteredSortedTransactions]);

  return {
    modelVisible,
    groupedTransactions,
    setModelVisible,
    setFilterBy,
    setSortBy,
    filterBy,
    sortBy,
    navigateToDetailTransaction,
  };
};
