'use client'
import styled from 'styled-components'

const ContentButton = styled.button`
  padding: 18px 50px;
  border-radius: 0.25rem;
  background-color: var(--elegance-brown);
  border: 1px solid var(--elegance-brown);
  font-size: 18px;
  /* color: var(--elegance-dark-brown); */
  color: white;
  text-transform: uppercase;
  transition: 500ms;
  &:hover {
    border: 1px solid var(--elegance-brown);
    color: var(--elegance-brown);
    background-color: transparent;
  }
`

export const ButtonUI = {
  Button: ContentButton,
}
