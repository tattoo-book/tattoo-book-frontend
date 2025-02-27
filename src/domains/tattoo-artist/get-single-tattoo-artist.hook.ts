import { useQuery } from '@tanstack/react-query'
import { TattooArtistGateway } from '../../infra/tattoo-artist/gateway/tattoo-artist.gateway'
import { TattooArtist } from '../../infra/tattoo-artist/tattoo-artist.type'

export function useGetSingleTattooArtist(id: string | undefined) {
  return useQuery<TattooArtist | null, Error>({
    queryKey: ['tattooArtist', id],
    queryFn: async () => {
      if (!id) return null
      return await TattooArtistGateway.findOne({ id: +id })
    },

    // enabled: !!id,
    // staleTime: 60 * 1000,
    // cacheTime: 300 * 1000,
    // retry: 3,
  })
}
