import {LineChart} from 'react-native-chart-kit';
import {LineGraphProps} from '../../types/types';
import {useLineGraph} from './useLineGraph';
import {COLORS} from '../../constants/color';
import {Text, View} from 'react-native';

export default function LineGraph({transactions, filterBy}: LineGraphProps) {
  const {dataPoints, labels, chartWidth} = useLineGraph({
    transactions,
    filterBy,
  });

  return (
    <View>
      {transactions.length < 1 && (
        <View style={{alignSelf: 'center'}}>
          <Text style={{color: COLORS.charcoal}}>No Data</Text>
        </View>
      )}
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
        withDots={dataPoints.length === 1}
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
          marginLeft: 0,
          marginRight: 0,
          paddingRight: 0,
          paddingBottom: 0,
          marginBottom: 0,
        }}
      />
    </View>
  );
}
