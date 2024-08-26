import {Dimensions} from 'react-native';
import { useAppSelector } from '../../hooks/useStore';

export const useBarGraph = (amount:number,total:number) => {
  const {width} = Dimensions.get('screen');
  const currency = useAppSelector(state=>state.transactions.currency)
  const barWidth = width;
  const barHeight = 12;
  const innerBarWidth = (amount / total) * (barWidth - 12);

  return {
    barWidth,
    currency,
    barHeight,
    innerBarWidth
  };
};
