import Svg, { Path } from "react-native-svg"

function CheckMark() {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
    >
      <Path
        d="M24 0a24 24 0 100 48 24 24 0 000-48zm11.32 19.18L24 30.48a6 6 0 01-8.48 0l-2.84-2.82a2.008 2.008 0 012.84-2.84l2.82 2.84a2 2 0 002.84 0l11.3-11.32a2.008 2.008 0 012.84 2.84z"
        fill="#5233FF"
      />
    </Svg>
  )
}

export default CheckMark