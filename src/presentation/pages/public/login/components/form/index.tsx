'use client'
import { Loading } from '@/presentation/components/loading'
import { useSignIn } from '@/presentation/hooks/auth/sign-in'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import Link from 'next/link'
import { ButtonComponent } from '../../../../../components/button/button'
import { FormUI } from '../../../../../components/form'
import { ILoginCredentials } from './form.interfaces'
import { LOGIN_FORM_RULES } from './form.rules'

export default function LoginForm() {
  const { mutate, isPending } = useSignIn()

  const onFinish = (credentials: ILoginCredentials) => {
    mutate(credentials)
  }

  return (
    <div
      style={{
        width: '35%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px 5%',
        gap: '40px',
      }}
    >
      {/* <Image className="max-h-40" width={200} height={200} alt="logo" src={''} /> */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
        <h1 style={{ fontSize: '22px' }}>Bem vindo ao TatooBook</h1>
      </div>
      <FormUI.Form
        className="bg-white"
        name="login"
        initialValues={{ remember: true }}
        style={{ width: '100%' }}
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
            <Link href="">Recuperar senha</Link>
          </Flex>
        </FormUI.Item>

        <FormUI.Item>
          <ButtonComponent style={{ height: '60px', width: '100%' }} className="hover:border-2" type="submit">
            {isPending ? <Loading /> : 'Entrar'}
          </ButtonComponent>
          <br></br>
          ou <Link href={'/register'}>Cadastre-se</Link>
        </FormUI.Item>
      </FormUI.Form>
    </div>
  )
}
