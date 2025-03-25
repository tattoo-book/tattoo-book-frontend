'use client'

import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  display: flex;
  justify-content: space-between;
`

export const RegisterPageUI = { Layout: Background }
