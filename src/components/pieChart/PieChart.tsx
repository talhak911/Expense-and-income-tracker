import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {usePieChart} from './usePieChart';
import { PieChartProps } from 'react-native-chart-kit/dist/PieChart';

const PieChart: React.FC<PieChartProps> = ({data}) => {
  const {createDonutSlice, total, centerX, centerY, radius} = usePieChart({
    data,
  });
  let startAngle = 0;

  return (
    <Svg width={375} height={240} viewBox="0 0 375 240" fill="none">
      <G>
        {data.length === 1 ? (
          <Path
            d={`M ${centerX - radius}, ${centerY} 
                a ${radius},${radius} 0 1,0 ${radius * 2},0 
                a ${radius},${radius} 0 1,0 -${radius * 2},0`}
            fill="none"
            stroke={data[0].color}
            strokeWidth={24}
            strokeLinecap="round"
          />
        ) : (
          data.map((item, index) => {
            const path = createDonutSlice(item.amount, startAngle);
            startAngle += (item.amount / total) * 360;
            return (
              <Path
                key={index}
                d={path}
                fill="none"
                stroke={item.color}
                strokeWidth={24}
                strokeLinecap="round"
              />
            );
          })
        )}
      </G>
    </Svg>
  );
};

export default PieChart;
