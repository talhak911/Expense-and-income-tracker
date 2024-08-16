import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Width } from '../../utils/responsive';

const Graph = ({ data }) => {
  // Example of data structure: [{ day: 1, amount: 20 }, { day: 2, amount: 50 }, ...]

  const pathData = data.map((point, index) => {
    const x = (index / (data.length - 1)) * Width(100); // Calculate x position
    const y = 170 - (point.amount / Math.max(...data.map(p => p.amount))) * 170; // Calculate y position
    return { x, y };
  });

  const curvePath = pathData.map((point, index, array) => {
    if (index === 0) {
      return `M ${point.x},${point.y}`;
    }
    const prevPoint = array[index - 1];
    const controlX = (prevPoint.x + point.x) / 2;
    return `C ${controlX},${prevPoint.y} ${controlX},${point.y} ${point.x},${point.y}`;
  }).join(' ');

  return (
    <Svg
      style={{ marginVertical:10 }}
      width={Width(100)}
      height={178}
      viewBox={`0 0 ${Width(100)} 170`}
      fill="none"
    >
      <Path
        d={`${curvePath} L ${Width(100)},170 L 0,170 Z`} // Close the path to form the fill area
        fill="url(#paint0_linear)"
      />
      <Path
        d={curvePath}
        stroke="#7F3DFF"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={188.5}
          y1={3}
          x2={188.5}
          y2={170}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8B50FF" stopOpacity={0.24} />
          <Stop offset={1} stopColor="#8B50FF" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Graph;
