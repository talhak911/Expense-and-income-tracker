import Svg, { Path } from "react-native-svg"
import { COLORS } from '../../constants/color'


function BudgetIcon({focused}:{focused:boolean}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path d="M24 11H13V0a12 12 0 0111 11z" fill={focused?COLORS.purple:COLORS.silver} />
      <Path d="M24 13A12 12 0 1111 0v12a1 1 0 001 1h12z" fill={focused?COLORS.purple:COLORS.silver} />
    </Svg>
  )
}

export default BudgetIcon
