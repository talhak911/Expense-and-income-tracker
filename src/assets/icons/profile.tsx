import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/colors"

function ProfileIcon({focused}:{focused:boolean}) {
  return (
    <Svg
      width={20}
      height={24}
      viewBox="0 0 20 24"
      fill="none"
    >
      <Path
        d="M10 12.07a6 6 0 100-12 6 6 0 000 12zM13 14H7a7 7 0 00-7 7 3 3 0 003 3h14a3 3 0 003-3 7 7 0 00-7-7z"
        fill={focused?COLORS.purple:COLORS.silver}
      />
    </Svg>
  )
}

export default ProfileIcon
