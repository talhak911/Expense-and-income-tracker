import Svg, { Rect, Path } from "react-native-svg"

function SettingIcon() {
  return (
    <Svg
      width={52}
      height={52}
      viewBox="0 0 52 52"
      fill="none"
    >
      <Rect width={52} height={52} rx={16} fill="#EEE5FF" />
      <Path d="M26 28a2 2 0 100-4 2 2 0 000 4z" fill="#7F3DFF" />
      <Path
        d="M35.79 27l-.38-.23a.94.94 0 010-1.62l.38-.23a3 3 0 001.1-4.09l-1-1.74a3 3 0 00-4.1-1.09l-.32.18a1 1 0 01-1.47-.82V17a3 3 0 00-3-3h-2a3 3 0 00-3 3v.36a1 1 0 01-1.48.86l-.31-.22a3 3 0 00-4.1 1.09l-1 1.74a3 3 0 001.1 4.17l.38.23a.94.94 0 010 1.62l-.38.15a3 3 0 00-1.1 4.09l1 1.74a3 3 0 004.1 1.17l.31-.17a1 1 0 011 0 1 1 0 01.49.84V35a3 3 0 003 3h2a3 3 0 003-3v-.37a1 1 0 011.5-.84l.31.18a3 3 0 004.1-1.09l1-1.74A3.002 3.002 0 0035.79 27zM26 30a4 4 0 110-8 4 4 0 010 8z"
        fill="#7F3DFF"
      />
    </Svg>
  )
}

export default SettingIcon
