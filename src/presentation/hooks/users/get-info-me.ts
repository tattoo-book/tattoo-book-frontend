import { UserGateway } from '@/external/users/users.gateway'
import { useQuery } from '@tanstack/react-query'

export function useGetInfoMe() {
  return useQuery({
    queryKey: ['infoMe'],
    queryFn: async () => {
      return await UserGateway.getInfoMe()
    },
  })
}
