import { TattooGateway } from '@/external/tattoos/tattoo.gateway'
import { useMutation } from '@tanstack/react-query'

export function useUpdate() {
  const mutation = useMutation({
    mutationFn: async (tatooInfo: any) => {
      return TattooGateway.update(tatooInfo)
    },
    onSuccess: (data) => {
      console.log('Success on create tattoo')
    },
    onError: (error: any) => {
      console.log('ERROR: ', error)
    },
  })

  return mutation
}
