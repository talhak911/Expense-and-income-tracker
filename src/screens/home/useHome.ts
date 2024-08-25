import {useAppSelector} from '../../hooks/useStore';
import {getMonth} from '../../utils/utils';

export const useHome = () => {
  const userImage = useAppSelector(state=>state.auth.user?.photoURL)
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
  return {
    userImage,
    month,
    currency,
    expenses,
    incomes,
    balance,
  };
};
