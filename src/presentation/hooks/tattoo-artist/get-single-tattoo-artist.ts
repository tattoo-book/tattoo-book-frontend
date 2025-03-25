import { TattooArtistGateway } from '@/external/tattoo-artist/gateway/tattoo-artist.gateway'
import { TattooArtist } from '@/external/tattoo-artist/tattoo-artist.type'
import { useQuery } from '@tanstack/react-query'

export function useGetSingleTattooArtist(id: string | string[] | undefined) {
  return useQuery<TattooArtist | null, Error>({
    queryKey: ['tattooArtist', id],
    queryFn: async () => {
      if (!id) return null
      return await TattooArtistGateway.findOne({ id: +id })
    },
  })
}
