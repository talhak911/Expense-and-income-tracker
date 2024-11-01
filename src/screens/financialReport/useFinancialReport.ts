import {CATEGORY_COLORS} from '../../constants/color';
import {useAppSelector} from '../../hooks/useStore';
import {CategoryData, FinancialReportResult} from '../../types/types';

export const useFinancialReport = (): FinancialReportResult => {
  const transactions = useAppSelector(state => state.transactions.transactions);
  const currency = useAppSelector(state => state.transactions.currency);
  const totalExpense = transactions
    .filter(item => item.type === 'expense')
    .map(item => item.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toString();

  const totalIncome = transactions
    .filter(item => item.type === 'income')
    .map(item => item.amount)
    .reduce((acc, amount) => acc + amount, 0)
    .toString();

  const expensesByCategory = transactions
    .filter(item => item.type === 'expense')
    .reduce<Record<string, CategoryData>>((acc, item) => {
      const category = item.category || 'Other';
      if (!acc[category]) {
        acc[category] = {
          amount: 0,
          color: CATEGORY_COLORS[category] || 'blue',
          category,
        };
      }
      acc[category].amount += item.amount;
      return acc;
    }, {});
  const incomesByCategory = transactions
    .filter(item => item.type === 'income')
    .reduce<Record<string, CategoryData>>((acc, item) => {
      const category = item.category || 'Other';
      if (!acc[category]) {
        acc[category] = {
          amount: 0,
          color: CATEGORY_COLORS[category] || 'blue',
          category,
        };
      }
      acc[category].amount += item.amount;
      return acc;
    }, {});

  const expenses = Object.values(expensesByCategory);
  const incomes = Object.values(incomesByCategory);
  return {expenses, incomes, totalExpense, currency, totalIncome};
};
