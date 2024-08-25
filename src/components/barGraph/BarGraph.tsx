import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../constants/colors';
import {FontInter} from '../../constants/fonts';
import {BarGraphProps} from '../../types/types';
import {styles} from './styles';
const {width} = Dimensions.get('screen');
function BarGraph({total, item, type}: BarGraphProps) {
  const barWidth = width;
  const barHeight = 12;
  const innerBarWidth = (item.amount / total) * (barWidth - 12);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerContant}>
          <View style={[styles.amountContainer, {backgroundColor: item.color}]} />
          <Text style={{color: COLORS.black50}}>{item.category}</Text>
        </View>
        <Text
          style={{
            color: type === 'expense' ? COLORS.red : COLORS.green,
            fontSize: 24,
            fontFamily: FontInter,
          }}>
          {type === 'expense' ? `- ` : ''}${item.amount}
        </Text>
      </View>

      <Svg
        width={barWidth}
        height={barHeight}
        viewBox={`0 0 ${barWidth} ${barHeight}`}
        fill="none">
        <Path
          stroke="#F1F1FA"
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`M 6 ${barHeight / 2} L ${barWidth} ${barHeight / 2}`}
        />
        <Path
          stroke={item.color}
          strokeWidth={12}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`M 6 ${barHeight / 2} L ${innerBarWidth -15} ${barHeight / 2}`}
        />
      </Svg>
    </View>
  );
}

export default BarGraph;
