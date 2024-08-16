import Svg, { Rect, Path } from "react-native-svg"

function EditIcon() {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
    >
      <Rect x={0.5} y={0.5} width={39} height={39} rx={7.5} stroke="#F1F1FA" />
      <Path
        d="M29.19 16.46l-12 12a2.06 2.06 0 01-1 .54l-3.54.71a2 2 0 01-2.35-2.35l.7-3.51a2.06 2.06 0 01.54-1L23.38 11a4.15 4.15 0 015.94 0 4 4 0 01-.13 5.51v-.05z"
        stroke="#212325"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EditIcon
