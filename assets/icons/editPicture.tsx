import Svg, { Rect, Path } from "react-native-svg"

function EditPictureIcon() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
    >
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} fill="#fff" />
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#F1F1FA" />
      <Path
        d="M24.318 15.566l-8.25 8.25c-.19.186-.428.315-.687.372l-2.434.488a1.374 1.374 0 01-1.616-1.616l.482-2.413c.056-.26.185-.498.37-.688l8.14-8.146a2.854 2.854 0 014.084 0 2.75 2.75 0 01-.089 3.788v-.035z"
        stroke="#212325"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default EditPictureIcon
