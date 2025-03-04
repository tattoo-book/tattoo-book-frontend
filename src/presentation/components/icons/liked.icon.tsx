import { HeartFilled } from '@ant-design/icons'

interface ILikedIcon {
  onClick: () => void
}

export function LikedIcon(props: Readonly<ILikedIcon>) {
  return (
    <HeartFilled
      onClick={props.onClick}
      className="hover:animate-pulse hover:scale-125 transition-transform duration-300 ease-in-out"
      style={{ color: 'red', fontFamily: 'Poppins', fontSize: '18px' }}
    />
  )
}
