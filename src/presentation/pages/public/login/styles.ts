'use client'

import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.7);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5); */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  display: flex;
  justify-content: space-between;
`

export const LoginPageStyles = { Layout: Background }
