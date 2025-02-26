'use client'
import { InstagramOutlined, TikTokOutlined, XOutlined } from '@ant-design/icons'
import { HomeFooterUI } from './styles'

const { Background, Footer } = HomeFooterUI

export default function HomeFooter() {
  return (
    <Background>
      <Footer.Container>
        <div>
          <Footer.H2>Midias Sociais</Footer.H2>
          <Footer.Columns>
            <Footer.Link>
              <InstagramOutlined /> @tattoobook
            </Footer.Link>
            <Footer.Link>
              <TikTokOutlined /> tattoobook
            </Footer.Link>
            <Footer.Link>
              <XOutlined /> tattoobook
            </Footer.Link>
          </Footer.Columns>
        </div>
        <div>
          <Footer.H2>Sobre Nós</Footer.H2>
          <Footer.Columns>
            <Footer.Link>O que fazemos?</Footer.Link>
            <Footer.Link>Junte-se a nós</Footer.Link>
            <Footer.Link>Precisa de ajuda?</Footer.Link>
          </Footer.Columns>
        </div>
        <div>
          <Footer.H2>Corporativo</Footer.H2>
          <Footer.Columns>
            <Footer.Link>Poticas de Privacidade</Footer.Link>
            <Footer.Link>Contato</Footer.Link>
            <Footer.Link href="https://github.com/tattoo-book">Github</Footer.Link>
          </Footer.Columns>
        </div>
      </Footer.Container>
    </Background>
  )
}
