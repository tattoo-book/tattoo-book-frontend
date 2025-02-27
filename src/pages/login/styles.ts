'use client'

import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginUI = { Background }
