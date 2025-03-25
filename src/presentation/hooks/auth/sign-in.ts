import { AuthGateway } from '@/external/auth/auth.gateway'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { useRouter } from 'next/navigation'
import { ILoginCredentials } from '../../pages/public/login/components/form/form.interfaces'

export function useSignIn() {
  const navigate = useRouter()

  const mutation = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      return AuthGateway.login(credentials)
    },
    onSuccess: (data) => {
      if (data) {
        navigate.push('/home')
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
