import { ReactNode } from 'react'

interface IBox {
  children: ReactNode
  style?: React.CSSProperties
  className?: string
  onClick?: () => void
}

export function Box({ children, style, className, onClick }: IBox) {
  return (
    <div className={className} style={style} onClick={onClick}>
      {children}
    </div>
  )
}
