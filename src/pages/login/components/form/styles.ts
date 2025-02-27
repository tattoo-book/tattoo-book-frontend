'use client'
import styled from 'styled-components'

const FormContainer = styled.div`
  width: 25%;
  height: 80%;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 10);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`

export const LoginFormUI = { Container: FormContainer }
