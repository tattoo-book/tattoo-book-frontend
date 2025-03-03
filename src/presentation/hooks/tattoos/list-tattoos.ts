import { TattooGateway } from '@/external/tattoos/tattoo.gateway'
import { ParamsDTO } from '@/external/tattoos/tattoo.type'
import { useQuery } from '@tanstack/react-query'

export function useListTattoos(params?: ParamsDTO) {
  return useQuery({
    queryKey: ['tattoos'],
    queryFn: async () => {
      return await TattooGateway.list(params)
    },
  })
}
