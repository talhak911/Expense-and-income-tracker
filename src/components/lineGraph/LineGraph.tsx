import {LineChart} from 'react-native-chart-kit';
import {LineGraphProps} from '../../types/types';
import {useLineGraph} from './useLineGraph';
import {COLORS} from '../../constants/colors';

export default function LineGraph({transactions, filterBy}: LineGraphProps) {
  const {dataPoints, labels, chartWidth} = useLineGraph({
    transactions,
    filterBy,
  });

  return (
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataPoints.length > 0 ? dataPoints : [0],
              color: () => COLORS.purple,
              strokeWidth: 6,
            },
          ],
        }}
        width={chartWidth}
        height={290}
        fromZero
        withDots={dataPoints.length===1}
        withOuterLines={false}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: 'white',
          backgroundGradientToOpacity: 0,
          color: () => COLORS.purple,
          strokeWidth: 6,
        }}
        bezier
        style={{
          marginLeft: 5,
          paddingRight: 0,
          paddingBottom: 0,
          marginBottom: 0, 
        }}
      />
  );
}
