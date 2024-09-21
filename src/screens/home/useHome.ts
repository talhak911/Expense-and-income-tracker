import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {setBalance} from '../../redux/slices/transactionsSlice';
import {getMonth} from '../../utils/utils';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const userImage = useAppSelector(state => state.auth.user?.photoURL);
  const month = getMonth();
  const transactionSlice = useAppSelector(state => state.transactions);
  const expenses = transactionSlice.transactions
    .filter(item => item.type === 'expense')
    .map(item => item.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toString();
  const currency = transactionSlice.currency;
  const incomes = transactionSlice.transactions
    .filter(item => item.type === 'income')
    .map(item => item.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toString();
  const balance = (Number(incomes) - Number(expenses)).toString();
  useEffect(() => {
    dispatch(setBalance(balance));
  }, [balance]);
  return {
    userImage,
    month,
    currency,
    expenses,
    incomes,
    balance,
  };
};
