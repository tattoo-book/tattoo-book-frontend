'use client'

import styled from 'styled-components'

const ContentButton = styled.button`
  padding: 18px 50px;
  border-radius: 0.25rem;
  border: 1px solid var(--elegance-brown);
  background-color: var(--elegance-brown);
  transition: 500ms;

  color: white;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    border: 1px solid var(--elegance-brown);
    color: var(--elegance-brown);
    background-color: transparent;
  }
`

export const ButtonUI = {
  Button: ContentButton,
}
