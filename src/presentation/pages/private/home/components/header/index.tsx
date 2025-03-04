'use client'

'use client'
import { useRouter } from 'next/navigation'
import { ButtonComponent } from '../../../../../components/button/button'
import { HomeUI } from '../../styles'

const { Background, BackgroundGlass, Header, Content } = HomeUI
const { Titulo, SubTitulo } = Content

export function HomeHeader() {
  const navigate = useRouter()

  const logout = () => {
    localStorage.removeItem('token')
    navigate.push('/login')
  }

  return (
    <Background>
      <BackgroundGlass>
        <Header.Container>
          <Header.Nav>
            <Header.Link onClick={() => navigate.push('/tattoos')}>Tatuagens</Header.Link>
            <Header.Link>Tatuadores</Header.Link>
            <Header.Link>Estudios</Header.Link>
          </Header.Nav>
          <Header.Nav>
            <Header.Link>Sobre nos</Header.Link>
            <Header.Link onClick={() => navigate.push('/profiles/me')}>Profile</Header.Link>
            <Header.Link onClick={() => logout()}>Sair</Header.Link>
          </Header.Nav>
        </Header.Container>

        <Content.Container className="flex flex-col gap-14 items-center justify-center">
          <div className="flex flex-col items-center">
            <Titulo>Marque seus momentos</Titulo>
            <SubTitulo>Encontre as melhores ideias e profissionais</SubTitulo>
          </div>
          <ButtonComponent onClick={() => console.log('click')}>Ver mais</ButtonComponent>
        </Content.Container>
      </BackgroundGlass>
    </Background>
  )
}
