'use client'
import { ITattoo } from '@/infra/tattoos/tattoo.interface'
import { SearchOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/loading'
import { useListTattoos } from '../../hooks/tattoos/list-tattoos'
import { TattooModal } from './components/modal/modal'
import { TattooPageListUI } from './styles'

const { Background, List, Input } = TattooPageListUI

export function TattooPageList() {
  /* Variables */
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalCard, setModalCard] = useState<ITattoo | null>(null)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined)

  const {
    isLoading,
    data: tattoos,
    refetch,
  } = useListTattoos({ includes: ['likes', 'tattooArtist'], search: { searchValues: searchTerm } })

  /* Functions */
  const onChange = (value: string) => {
    setSearchTerm(value == '' ? undefined : value)
  }

  const openModal = (index: number) => {
    if (tattoos) setModalCard(tattoos[index])
    setShowModal(true)
  }

  const closeModal = () => {
    setModalCard(null)
    setShowModal(false)
  }

  const content = isLoading ? (
    <Loading />
  ) : (
    <List.Container>
      {tattoos?.map((tattoo, index) => (
        <List.ImageContainer key={index}>
          <List.Image src={tattoo.imageLink} onClick={() => openModal(index)} />
        </List.ImageContainer>
      ))}
    </List.Container>
  )

  /* Use Effects */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => refetch(), 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, refetch])

  return (
    <Background>
      {modalCard && <TattooModal showModal={showModal} tattoo={modalCard} close={closeModal} />}

      <Input.Container>
        <div className="flex">
          <Input.Search
            onChange={(event) => onChange(event.target.value)}
            placeholder="Procure por tatuador, tatuagens, estilo ... "
          />

          <Input.Button onClick={() => refetch()}>
            <SearchOutlined style={{ color: '#bf8a6b', fontSize: '22px' }} />
          </Input.Button>
        </div>
      </Input.Container>

      {content}
    </Background>
  )
}
