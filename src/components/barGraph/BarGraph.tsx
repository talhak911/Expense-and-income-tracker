import React from 'react';
import { Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../constants/color';
import {FONT_INTER} from '../../constants/fonts';
import {BarGraphProps} from '../../types/types';
import {styles} from './BarGraphStyles';
import { useBarGraph } from './useBarGraph';

function BarGraph({total, item, type}: BarGraphProps) {
const {barHeight,barWidth,innerBarWidth,currency}=useBarGraph(item.amount,total)
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
            fontFamily: FONT_INTER,
          }}>
          {type === 'expense' ? `- ` : ''}{currency}{item.amount}
        </Text>
      </View>

      <Svg
        width={barWidth}
        height={barHeight}
        viewBox={`0 0 ${barWidth} ${barHeight}`}
        fill="none">
        <Path
          stroke={COLORS.lightGrey}
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
          d={`M 6 ${barHeight / 2} L ${innerBarWidth -10} ${barHeight / 2}`}
        />
      </Svg>
    </View>
  );
}

export default BarGraph;
