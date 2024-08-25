import {Dimensions} from 'react-native';

export const useBarGraph = (amount:number,total:number) => {
  const {width} = Dimensions.get('screen');
  const barWidth = width;
  const barHeight = 12;
  const innerBarWidth = (amount / total) * (barWidth - 12);

  return {
    barWidth,
    barHeight,
    innerBarWidth
  };
};
