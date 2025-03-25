import { Card } from 'antd'
import styled from 'styled-components'

const CardContainer = styled(Card)`
  overflow: hidden;
  box-shadow: 2px 2px 15px #5e5e5e75;
  border-radius: 0.75rem;
`

const Footer = styled.div``

export const CardUI = {
  Card: CardContainer,
  Footer: Footer,
}
