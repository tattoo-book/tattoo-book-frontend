import { ILoginCredentials } from '@/app/login/components/form/form.interfaces'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { AuthGateway } from '../../infra/auth/auth.gateway'

export function useSignIn() {
  const navigate = (st: string) => {}

  const mutation = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      return AuthGateway.login(credentials)
    },
    onSuccess: (data) => {
      if (data) {
        navigate('/home')
      } else {
        console.log('Login failed: Invalid credentials')
      }
    },
    onError: (error: any) => {
      const description = error.response.data.description
      notification.open({
        type: 'error',
        message: 'Falhar ao fazer login',
        description: description ?? 'Credenciais incorretas.',
        duration: 5,
        placement: 'bottomRight',
      })
    },
  })

  return mutation
}
