'use client'

import LoginForm from './components/form'
import { Wellcome } from './components/welcome/welcome'
import { LoginPageStyles as LoginPageUI } from './styles'

const { Layout } = LoginPageUI

export default function LoginPage() {
  return (
    <Layout>
      <Wellcome />
      <LoginForm />
    </Layout>
  )
}
