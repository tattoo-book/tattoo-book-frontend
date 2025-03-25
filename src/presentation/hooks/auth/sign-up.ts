'use client'
import { AuthGateway } from '@/external/auth/auth.gateway'
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import { useRouter } from 'next/navigation'
import { IRegisterCredentials } from '../../pages/public/register/components/form/form.interfaces'

export function useRegister() {
  const navigate = useRouter()

  const mutation = useMutation({
    mutationFn: async (credentials: IRegisterCredentials) => {
      return AuthGateway.register(credentials)
    },
    onSuccess: (data) => {
      if (data) {
        navigate.push('/login')
      } else {
        console.log('Register failed: Invalid credentials')
      }
    },
    onError: (error: any) => {
      const description = error.response.data.description
      notification.open({
        type: 'error',
        message: 'Falhar ao cadastrar usuário',
        description: description ?? 'Credenciais incorretas.',
        duration: 5,
        placement: 'bottomRight',
      })
    },
  })

  return mutation
}
