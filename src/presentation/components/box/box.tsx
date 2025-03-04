import { ReactNode } from 'react'

interface IBox {
  children: ReactNode
  style?: React.CSSProperties
  className?: string
}

export function Box({ children, style, className }: IBox) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
