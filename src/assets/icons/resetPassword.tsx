import Svg, { Rect, Path } from "react-native-svg"

function ResetPasswordIcon() {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"

    >
      <Rect width={52} height={52} rx={16} fill="#EEE5FF" />
      <Path
        d="M26 14a12 12 0 100 24 12 12 0 000-24zm-1 7a1 1 0 012 0v6a1 1 0 01-2 0v-6zm1 11a1 1 0 110-2 1 1 0 010 2z"
        fill="#7F3DFF"
      />
    </Svg>
  )
}

export default ResetPasswordIcon
