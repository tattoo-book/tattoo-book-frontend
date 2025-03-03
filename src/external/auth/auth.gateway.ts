import { IRegisterCredentials } from '../../presentation/pages/public/register/components/form/form.interfaces'
import { Gateway } from '../core/gateway/Gateway'
import { Data } from '../tattoos/tattoo.interface'

interface ILoginCredentials {
  email: string
  password: string
}

export class AuthGatewayImplemented {
  async register(credentials: IRegisterCredentials) {
    return await Gateway.request<{ data: any }>({
      method: 'POST',
      data: credentials,
      url: '/users',
    }).then((res) => {
      return res.data
    })
  }

  async login(credentials: ILoginCredentials) {
    return await Gateway.request<Data<any>>({
      method: 'POST',
      data: credentials,
      url: '/auth/sign-in',
    }).then((res) => {
      localStorage.setItem('token', res.data.accessToken)
      return res.data
    })
  }
}

export const AuthGateway = new AuthGatewayImplemented()
