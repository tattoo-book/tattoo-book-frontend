import styled from 'styled-components'
import { TattooCard } from '../../../../../../../components/card/card'
import { Loading } from '../../../../../../../components/loading'
import { useListTattoos } from '../../../../../../../hooks/tattoos/list-tattoos'

const TattooListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export function TattooList({ id }: { id: string | undefined }) {
  const { isLoading, data } = useListTattoos({
    includes: ['likes', 'tattooArtist'],
    filter: { tattooArtistId: id ? [+id] : [2] },
  })

  if (isLoading) return <Loading />

  return (
    <TattooListContainer className="flex gap-6 p-2 flex-wrap overflow-y-scroll w-full">
      {data &&
        data?.map((tattoo, index) => (
          <TattooCard
            key={index}
            index={index}
            tattoo={tattoo}
            style={{ maxHeight: '300px', minHeight: '280px', maxWidth: 'calc(20% - 24px)', minWidth: '200px' }}
          />
        ))}
    </TattooListContainer>
  )
}
