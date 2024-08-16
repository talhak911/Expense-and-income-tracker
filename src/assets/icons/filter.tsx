import Svg, { Rect, Path } from "react-native-svg"

function FilterIcon() {
  return (
<Svg
width={40}
height={40}
viewBox="0 0 40 40"
fill="none"
>
<Rect x={0.5} y={0.5} width={39} height={39} rx={7.5} stroke="#F1F1FA" />
<Path
  d="M31 12.5H9a.5.5 0 010-1h22a.5.5 0 010 1z"
  fill="#000"
  stroke="#212325"
/>
<Path
  d="M27 21H13a1 1 0 010-2h14a1 1 0 010 2zM23 29h-6a1 1 0 010-2h6a1 1 0 010 2z"
  fill="#000"
/>
</Svg>)
}

export default FilterIcon
