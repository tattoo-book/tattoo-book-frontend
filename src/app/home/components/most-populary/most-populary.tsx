'use client'
import { useListTattoos } from '@/presentation/hooks/tattoos/list-tattoos.hook'
import { Loading } from '../../../../presentation/components/loading'
import { TattooCard } from './card/card'
import { MostPopularuTattoosUI } from './styles'

const { Background, Titulo, Content } = MostPopularuTattoosUI

export function MostPopularyTattoos() {
  const { isLoading, data } = useListTattoos({ includes: ['likes'], order: { popularity: 'desc' }, pageSize: 4 })

  return (
    <Background>
      <Titulo.Container>
        <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
      </Titulo.Container>
      <Content.Container className="px-20">
        {isLoading ? (
          <Loading />
        ) : (
          <Content.CardList>
            {data?.map((card, index) => (
              <TattooCard key={index} index={index} tattoo={card} />
            ))}
          </Content.CardList>
        )}
      </Content.Container>
    </Background>
  )
}
