'use client'

import LoginForm from './components/form'
import { LoginUI } from './styles'

export default function LoginPage() {
  return (
    <LoginUI.Background>
      <LoginForm />
    </LoginUI.Background>
  )
}
