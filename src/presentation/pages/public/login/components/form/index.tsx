'use client'
import { useSignIn } from '@/presentation/hooks/auth/sign-in'
import { LoadingOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'
import Link from 'next/link'
import { ButtonComponent } from '../../../../../components/button/button'
import { FormUI } from '../../../../../components/form'
import { ILoginCredentials } from './form.interfaces'
import { LOGIN_FORM_RULES } from './form.rules'
import { LoginFormUI } from './styles'

export default function LoginForm() {
  const { mutate, isPending } = useSignIn()

  const onFinish = (credentials: ILoginCredentials) => {
    mutate(credentials)
  }

  return (
    <LoginFormUI.Container>
      <img
        className="max-h-40"
        src="https://static.wixstatic.com/media/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png/v1/fill/w_640,h_656,fp_0.49_0.41,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png"
      />
      <FormUI.Form
        className="bg-white"
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360, width: '80%' }}
        onFinish={onFinish}
      >
        <FormUI.Item name="email" rules={[LOGIN_FORM_RULES.username]}>
          <FormUI.Input style={{ height: '60px' }} prefix={<MailOutlined />} placeholder="Digite seu email" />
        </FormUI.Item>
        <FormUI.Item name="password" rules={[LOGIN_FORM_RULES.password]}>
          <FormUI.Input
            style={{ height: '60px' }}
            prefix={<LockOutlined />}
            type="password"
            placeholder="Digite sua senha"
          />
        </FormUI.Item>
        <FormUI.Item>
          <Flex justify="space-between" align="center">
            <FormUI.Item name="remember" valuePropName="checked" noStyle>
              <FormUI.Checkbox>Lembre-se de mim</FormUI.Checkbox>
            </FormUI.Item>
            <a href="">Recuperar senha</a>
          </Flex>
        </FormUI.Item>

        <FormUI.Item>
          <ButtonComponent style={{ height: '60px', width: '100%' }} className="hover:border-2" type="submit">
            {isPending ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: '#734930' }} />
              </div>
            ) : (
              'Entrar'
            )}
          </ButtonComponent>
          <br></br>
          ou <Link href={'/register'}>Cadastre-se</Link>
        </FormUI.Item>
      </FormUI.Form>
    </LoginFormUI.Container>
  )
}
