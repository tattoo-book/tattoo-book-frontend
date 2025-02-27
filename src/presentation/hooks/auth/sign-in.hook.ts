import { ILoginCredentials } from '@/presentation/pages/login/components/form/form.interfaces'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { AuthGateway } from '../../../@infra/auth/auth.gateway'

interface IUseSignIn {
  navigate: () => void
}

export function useSignIn(params: IUseSignIn) {
  const mutation = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      return AuthGateway.login(credentials)
    },
    onSuccess: (data) => {
      if (data) params.navigate()
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
