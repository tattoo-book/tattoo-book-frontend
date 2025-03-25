import { Key } from 'react'
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

export function TattooList({ id }: { id: string | string[] | undefined }) {
  const { isLoading, data, refetch } = useListTattoos({
    includes: ['likes', 'tattooArtist'],
    filter: { tattooArtistId: id ? [+id] : [2] },
  })

  if (isLoading) return <Loading />

  return (
    <TattooListContainer
      className="flex gap-6 p-2 flex-wrap overflow-y-scroll w-full"
      style={{ gap: '2rem', height: '100%' }}
    >
      {data?.map((tattoo, index) => (
        <TattooCard
          key={index as Key}
          index={index}
          tattoo={tattoo}
          refetch={refetch}
          style={{ width: '220px', height: '40%' }}
        />
      ))}
    </TattooListContainer>
  )
}
