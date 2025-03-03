import { LoadingOutlined, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../../../../../components/button/button'
import { FormUI } from '../../../../../components/form'
import { useRegister } from '../../../../../hooks/auth/sign-up'
import { IRegisterCredentials } from './form.interfaces'
import { LOGIN_FORM_RULES } from './form.rules'
import { RegisterFormUI } from './styles'

export function RegisterForm() {
  const { mutate, isPending } = useRegister()

  const onFinish = (credentials: IRegisterCredentials) => {
    console.log(credentials)
    if (credentials.password != credentials.confirm) {
      console.log('Senha são diferentes')
      return
    }
    delete credentials.confirm
    mutate(credentials)
  }

  return (
    <RegisterFormUI.Container>
      <img
        className="max-h-40"
        src="https://static.wixstatic.com/media/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png/v1/fill/w_640,h_656,fp_0.49_0.41,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png"
      />
      <FormUI.Form
        className="bg-white"
        name="login"
        initialValues={{ artist: false }}
        style={{ maxWidth: 360, width: '80%' }}
        onFinish={onFinish}
      >
        <FormUI.Item name="name">
          <FormUI.Input style={{ height: '60px' }} prefix={<UserOutlined />} placeholder="Digiter seu nome completo" />
        </FormUI.Item>
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

        <FormUI.Item name="confirm" rules={[LOGIN_FORM_RULES.password]}>
          <FormUI.Input
            style={{ height: '60px' }}
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm sua senha"
          />
        </FormUI.Item>

        <FormUI.Item name="artist" valuePropName="checked" noStyle>
          <FormUI.Checkbox>Sou tatuador</FormUI.Checkbox>
        </FormUI.Item>

        <FormUI.Item>
          <ButtonComponent style={{ height: '60px', width: '100%' }} className="hover:border-2" type="submit">
            {isPending ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: '#734930' }} />
              </div>
            ) : (
              'Cadastrar'
            )}
          </ButtonComponent>
          <br></br>
          fazer <Link to={'/login'}>Login</Link>
        </FormUI.Item>
      </FormUI.Form>
    </RegisterFormUI.Container>
  )
}
