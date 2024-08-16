import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/colors"

function HomeIcon({focused}:{focused?:boolean}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M23.67 9.56l-2-1.82L14 .78a3 3 0 00-4 0l-7.65 7-2 1.82A1 1 0 001 11.3a1 1 0 00.67-.3l.33-.3V21a3 3 0 003 3h14a3 3 0 003-3V10.74l.33.3a1 1 0 00.67.26 1 1 0 00.67-1.74z"
        fill={focused?COLORS.purple:COLORS.grey}
      />
    </Svg>
  )
}

export default HomeIcon
