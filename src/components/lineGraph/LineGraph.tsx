import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {LineGraphProps} from '../../types/types';
import {useLineGraph} from './useLineGraph';

export default function LineGraph({transactions, filterBy}: LineGraphProps) {
  const {chartWidth, dataPoints, labels} = useLineGraph({
    transactions,
    filterBy,
  });
  return (
    <View style={{marginLeft:12}}>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: dataPoints.length > 0 ? dataPoints : [0],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        }}
        width={chartWidth}
        height={320}
        verticalLabelRotation={filterBy === 'today' ? 0 : 70}
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: 'white',
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 6,
        }}
        bezier
      />
    </View>
  );
}
