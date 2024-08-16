import Svg, { Rect, Path } from "react-native-svg"

function LogoutIcon() {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
    >
      <Rect width={52} height={52} rx={16} fill="#FFE2E4" />
      <Path
        d="M29 18v-1a2 2 0 00-2-2H17a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2v-1M21 26h15.83M33.59 21.76l2.82 2.83a2 2 0 010 2.82l-2.82 2.83"
        stroke="#FD3C4A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogoutIcon
