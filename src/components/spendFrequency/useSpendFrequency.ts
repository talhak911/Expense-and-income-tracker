import { useState, useMemo } from 'react';
import { useAppSelector } from '../../hooks/useStore';
import dayjs from 'dayjs';

export const useSpendFrequency = () => {
  const [filterBy, setFilterBy] = useState<'today' | 'week' | 'month' | 'year'>('today');
  const transaction = useAppSelector(state => state.transactions.transactions);
  
  // Filter transactions to include only expenses
  const transactions = transaction.filter(item => item.type === 'expense');
  
  // Convert date strings to Date objects
  const parsedTransactions = transactions.map(transaction => ({
    ...transaction,
    date: new Date(transaction.date as string),
  }));

  // Filter transactions based on the selected date range
  const filteredTransactions = useMemo(() => {
    const now = dayjs();
    return parsedTransactions.filter(transaction => {
      const transactionDate = dayjs(transaction.date);

      switch (filterBy) {
        case 'today':
          return transactionDate.isSame(now, 'day');
        case 'week':
          return transactionDate.isSame(now, 'week');
        case 'month':
          return transactionDate.isSame(now, 'month');
        case 'year':
          return transactionDate.isSame(now, 'year');
        default:
          return false;
      }
    });
  }, [parsedTransactions, filterBy]);

  return {
    filterBy,
    setFilterBy,
    filteredTransactions, // Pass this to the LineGraph
  };
};
