import Svg, { Path } from "react-native-svg"

function DeleteIcon() {
  return (
    <Svg
      width={24}
      height={26}
      viewBox="0 0 24 26"
      fill="none"

    >
      <Path
        d="M23 4h-7V3a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H1a1 1 0 000 2h1.09l1.55 15.5a5 5 0 005 4.5h6.76a5 5 0 005-4.5L21.91 6H23a1 1 0 100-2zM10 3a1 1 0 011-1h2a1 1 0 011 1v1h-4V3zm.09 16H10a1 1 0 01-1-.91l-.52-6a1 1 0 111.99-.18l.53 6a1 1 0 01-.91 1.09zm4.91-.91a1 1 0 01-1 .91h-.09a1 1 0 01-.91-1.09l.53-6a1.003 1.003 0 112 .17L15 18.09z"
        fill="#fff"
      />
    </Svg>
  )
}

export default DeleteIcon
