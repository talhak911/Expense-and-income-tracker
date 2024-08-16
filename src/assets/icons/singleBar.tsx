import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const {width} = Dimensions.get("screen")
function SingleBar({ total, inner ,color}) {
  const barWidth = width; // Adjust bar width as needed
  const barHeight = 12;
  const outerBarPath = `M0 ${barHeight / 2} L${barWidth} ${barHeight / 2}`;
  const innerBarPath = `M0 ${barHeight / 2} L${(inner / total) * barWidth} ${barHeight / 2}`;

  return (
    <Svg width={barWidth} height={barHeight} viewBox={`0 0 ${barWidth} ${barHeight}`} fill="none">
      <Path
        stroke="#F1F1FA"
        strokeWidth={12}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={outerBarPath}
      />
      <Path
        stroke={color} // Replace with desired color
        strokeWidth={12} // Adjust inner bar width as needed
        strokeLinecap="round"
        strokeLinejoin="round"
        d={innerBarPath}
      />
    </Svg>
  );
}

export default SingleBar;
