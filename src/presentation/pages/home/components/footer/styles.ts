'use client'
import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  padding: 3rem 0rem;
  background-color: var(--elegance-off-white);
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const FooterContainerLink = styled.a`
  cursor: pointer;
  font-family: 'Poppins';

  &:hover {
    color: blue;
  }
`

const FooterContainerColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const FooterContainerH2 = styled.h2`
  font-weight: bold;
  font-family: 'Poppins';
`

export const HomeFooterUI = {
  Background,
  Footer: {
    Container: FooterContainer,
    Columns: FooterContainerColumns,
    Link: FooterContainerLink,
    H2: FooterContainerH2,
  },
}
