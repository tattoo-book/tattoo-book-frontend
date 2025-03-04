'use client'

import { Wellcome } from '../login/components/welcome/welcome'
import { RegisterForm } from './components/form/form'
import { RegisterPageUI } from './styles'

export function RegisterPage() {
  return (
    <RegisterPageUI.Layout>
      <Wellcome />
      <RegisterForm />
    </RegisterPageUI.Layout>
  )
}
