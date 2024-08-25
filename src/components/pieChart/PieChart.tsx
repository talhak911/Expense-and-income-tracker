import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export type PieChartProps= {
  data: {
    amount: number;
    color: string;
  }[];
}

const Chart: React.FC<PieChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  const radius = 100;
  const centerX = 187.5;
  const centerY = 120;

  const createDonutSlice = (value: number, startAngle: number): string => {
    const endAngle = startAngle + (value / total) * 360;
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

    const startX = centerX + radius * Math.cos((startAngle - 90) * (Math.PI / 180));
    const startY = centerY + radius * Math.sin((startAngle - 90) * (Math.PI / 180));

    const endX = centerX + radius * Math.cos((endAngle - 90) * (Math.PI / 180));
    const endY = centerY + radius * Math.sin((endAngle - 90) * (Math.PI / 180));

    const pathData = `
      M${startX},${startY}
      A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}
    `;

    return pathData;
  };

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

export default Chart;
