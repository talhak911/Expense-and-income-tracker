import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../src/constants/color"

function TransactionBottomIcon({focused}:{focused:boolean}) {
  return (
    <Svg
      width={28}
      height={22}
      viewBox="0 0 28 22"
      fill="none"
    >
      <Path
        d="M18.13 12.93v1a5 5 0 01-5 5H9.87a3 3 0 01-1.68 2.61c-.41.205-.862.31-1.32.31A3 3 0 015 21.21L1.29 18.3a3 3 0 010-4.74L5 10.65a3 3 0 013.21-.34 2.86 2.86 0 011.46 1.62h7.43a1 1 0 011.03 1zM27.87 6.07a3 3 0 01-1.16 2.37L23 11.35a3.09 3.09 0 01-1.89.65c-.458 0-.91-.105-1.32-.31a2.86 2.86 0 01-1.46-1.62h-7.46a1 1 0 01-1-1v-1a5 5 0 015-5h3.26A3 3 0 0123 .79l3.71 2.91a3 3 0 011.16 2.37z"
        fill={focused?COLORS.purple:COLORS.silver}
      />
    </Svg>
  )
}

export default TransactionBottomIcon