import {Dimensions} from 'react-native';
import {LineGraphProps} from '../../types/types';

export const useLineGraph = ({transactions, filterBy}: LineGraphProps) => {
  const reversedTransactions = [...transactions].reverse();

  const labels = reversedTransactions.map(transaction => {
    const date = new Date(transaction.date as string);

    if (filterBy === 'today') {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
    } else {
      return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
    }
  });

  const dataPoints = reversedTransactions.map(transaction => {
    const amount = transaction.amount;
    return isNaN(amount) ? 0 : amount;
  });

  const chartWidth = Dimensions.get('screen').width;

  return {
    labels,
    dataPoints,
    chartWidth,
  };
};
