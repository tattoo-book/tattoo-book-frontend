'use client'
import { ITattoo } from '@/external/tattoos/tattoo.interface'
import { useListTattoos } from '@/presentation/hooks/tattoos/list-tattoos'
import { Key } from 'react'
import { Loading } from '../../../../../components/loading'
import { TattooCard } from './card/card'
import { MostPopularuTattoosUI } from './styles'

const { Background, Titulo, Content } = MostPopularuTattoosUI

export function MostPopularyTattoos() {
  const { isLoading, data } = useListTattoos({ includes: ['likes'], order: { popularity: 'desc' }, pageSize: 4 })

  const CardList = () => {
    return (
      <Content.CardList>
        {data?.map((card: ITattoo, index: any) => (
          <TattooCard key={index as Key} index={index} tattoo={card} />
        ))}
      </Content.CardList>
    )
  }

  return (
    <Background>
      <Titulo.Container>
        <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
      </Titulo.Container>
      <Content.Container className="px-20">{isLoading ? <Loading /> : <CardList />}</Content.Container>
    </Background>
  )
}
