'use client'
import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: var(--elegance-off-white); */
  background-color: #fff;
`

const TituloContainer = styled.div`
  width: 100%;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Titulo = styled.h2`
  color: var(--elegance-black);
  text-transform: capitalize;
  font-size: 42px;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentCardLIst = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  width: 80%;
  height: 100%;
`

const CarouselCard = styled.div`
  height: 70vh;
`

export const MostPopularuTattoosUI = {
  Background,
  Titulo: {
    Container: TituloContainer,
    H2: Titulo,
  },
  Content: {
    Container: ContentContainer,
    CardList: ContentCardLIst,
    Carousel: {
      Card: CarouselCard,
    },
  },
}
