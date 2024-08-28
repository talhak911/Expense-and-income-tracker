import Svg, { Rect, Path } from "react-native-svg"

export default function SortIcon() {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
    > 
      <Rect x={0.5} y={0.5} width={39} height={39} rx={7.5} stroke="#F1F1FA" />
      <Path
        d="M31 12.5H19a.5.5 0 010-1h12a.5.5 0 010 1z"
        fill="#000"
        stroke="#212325"
      />
      <Path
        d="M25 21h-6a1 1 0 010-2h6a1 1 0 010 2zM21 29h-2a1 1 0 010-2h2a1 1 0 010 2zM15 11a1 1 0 00-1 1v14.45l-4.29-4.3a1.004 1.004 0 10-1.42 1.42l4.59 4.59A3 3 0 0015 29a1 1 0 001-1V12a1 1 0 00-1-1z"
        fill="#000"
      />
    </Svg>
  )
}