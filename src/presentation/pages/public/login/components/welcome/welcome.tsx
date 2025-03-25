import { Typography } from '@/presentation/components/typograph/typograph.styles'
import { WellcomeUI } from './wellcome.styles'

const { Background } = WellcomeUI
const { Paragraph, Title } = Typography

export function Wellcome() {
  return (
    <Background>
      <Title style={{ fontSize: '100px' }}>Tattoo Book</Title>
      <Paragraph>Encontre as melhores ideias e os melhores profissionais.</Paragraph>
      <Paragraph>Divulgue seu trabalho, encontre clientes que procuram o que você oferece.</Paragraph>
    </Background>
  )
}
