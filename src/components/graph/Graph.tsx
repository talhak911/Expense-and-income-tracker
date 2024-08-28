import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { Dimensions } from "react-native";
import { useLineGraph } from "./useLineGraph";
import { TransactionType } from "../../types/types";

export default function Graph({ transactions }:{transactions:TransactionType[]}) {
    const {bezierPathData,shadowPathData,height,width}=useLineGraph(transactions)

  return (
    <Svg
      width={width}
      height={height+30}
      viewBox={`0 0 ${width} ${height+30}`}
      fill="none"
    >
      {/* Shadow Path */}
      <Path
        d={shadowPathData}
        fill="url(#paint0_linear)"
      />

      {/* Bezier Line Path */}
      <Path
        d={bezierPathData}
        stroke="#7F3DFF"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={width / 2}
          y1={0}
          x2={width / 2}
          y2={height+30}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8B50FF" stopOpacity={0.24} />
          <Stop offset={1} stopColor="#8B50FF" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
