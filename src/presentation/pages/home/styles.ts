'use client'
import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const BackgroundGlass = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
`

const HeaderLink = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  color: #f2f2f2;
  cursor: pointer;

  &:hover {
    color: var(--elegance-brown);
  }
`

const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 20%;
  padding: 0px 180px;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  color: var(--elegance-off-white);
`

const ContentTitulo = styled.h1`
  font-weight: 800;
  font-size: 48px;
  text-transform: uppercase;
`

const ContentSubtitulo = styled.h2`
  color: var(--elegance-brown);
  font-size: 32px;
  font-weight: 500;
  font-family: 'Raleway';
  text-transform: uppercase;
`

const ContentButton = styled.button`
  padding: 18px 50px;
  border-radius: 0.25rem;
  background-color: var(--elegance-brown);

  font-size: larger;
  color: var(--elegance-black);
  text-transform: uppercase;
`

export const HomeUI = {
  Background,
  BackgroundGlass,
  Header: {
    Link: HeaderLink,
    Nav: HeaderNav,
    Container: HeaderContainer,
  },
  Content: {
    Container: ContentContainer,
    Titulo: ContentTitulo,
    SubTitulo: ContentSubtitulo,
    Button: ContentButton,
  },
}
