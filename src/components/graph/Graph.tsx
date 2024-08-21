import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function LineGraph({ transactions, filterBy }) {
  // Reverse transactions to ensure newest are on the right
  const reversedTransactions = [...transactions].reverse();

  // Extract labels and data points
  const labels = reversedTransactions.map(transaction => {
    const date = new Date(transaction.date);
    
    if (filterBy === 'today') {
      // Format the label as time (e.g., '10:30 AM')
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    } else {
      // Format the label as date (e.g., 'Jun 21')
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  });

  const dataPoints = reversedTransactions.map(transaction => {
    const amount = parseFloat(transaction.amount);
    return isNaN(amount) ? 0 : amount; // Replace NaN with 0
  });

  // Calculate the width of the chart based on the number of labels
  const chartWidth = Math.max(labels.length * 70, Dimensions.get('window').width);

  return (
    <View>
      <LineChart
        data={{
          labels: labels, // Array of labels derived from transactions
          datasets: [
            {
              data: dataPoints.length>0?dataPoints:[0], // Array of values derived from transactions
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={chartWidth} // Dynamically calculated width
        height={320}
        verticalLabelRotation={filterBy === 'today' ? 0 : 70} // No rotation for time labels
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#fff',
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 6, // optional, default 3
        }}
        bezier // Type of line chart              
      />
    </View>
  );
}




