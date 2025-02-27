import { useQuery } from '@tanstack/react-query'
import { TattooGateway } from '../../../infra/tattoos/tattoo.gateway'

export function useListTattos() {
  return useQuery({
    queryKey: ['tattoos'],
    queryFn: async () => {
      const res = await TattooGateway.list()
      return [...res, ...res, ...res]
    },
    staleTime: 60 * 1000,
    retry: 3,
  })
}
