import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { LineGraphProps, TransactionType } from '../../types/types';

export default function LineGraph({ transactions, filterBy }:LineGraphProps) {

  const reversedTransactions = [...transactions].reverse();


  const labels = reversedTransactions.map(transaction => {
    const date = new Date(transaction.date as string);
    
    if (filterBy === 'today') {
     
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    } else {
    
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  });

  const dataPoints = reversedTransactions.map(transaction => {
    const amount =transaction.amount;
    return isNaN(amount) ? 0 : amount; 
  });

  const chartWidth = Math.max(labels.length * 70, Dimensions.get('window').width);

  return (
    <View>
      <LineChart
        data={{
          labels: labels, 
          datasets: [
            {
              data: dataPoints.length>0?dataPoints:[0], 
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
              strokeWidth: 2,
            },
          ],
        }}
        width={chartWidth} // Dynamically calculated width
        height={320}
        verticalLabelRotation={filterBy === 'today' ? 0 : 70} 
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#fff',
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




