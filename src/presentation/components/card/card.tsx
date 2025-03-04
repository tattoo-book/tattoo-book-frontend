'use client'
import { TattooActions } from '@/external/tattoos/tattoo.actions'
import { TattooGateway } from '@/external/tattoos/tattoo.gateway'
import { ITattoo } from '@/external/tattoos/tattoo.interface'
import { User } from '@/external/users/user.type'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { Image } from 'antd'
import { useState } from 'react'
import { Box } from '../box/box'
import { LikedIcon } from '../icons/liked.icon'
import { UnLikedIcon } from '../icons/unliked.icon'
import { ModalUpdateTattoo } from './components/modal/modal'
import { CardUI } from './styles'

export interface ICard {
  index: number
  tattoo: ITattoo
  style?: React.CSSProperties
  editable?: boolean
  readonly refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<User | ITattoo[], Error>>
}

export function TattooCard(props: Readonly<ICard>) {
  const [liked, setLiked] = useState(props.tattoo?.liked)

  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = async () => {
    setShowModal(false)
    await props.refetch()
  }

  const like = async (id: number) => {
    TattooActions.like(id)
    setLiked(true)
    await props.refetch()
  }

  const unlike = async (id: number) => {
    TattooActions.unlike(id)
    setLiked(false)
    await props.refetch()
  }

  const deleteTattoo = async () => {
    await TattooGateway.delete(props.tattoo.id)
    await props.refetch()
  }

  return (
    <CardUI.Container style={{ ...props.style }}>
      <ModalUpdateTattoo showModal={showModal} close={closeModal} defaultValues={props.tattoo} />
      <div
        style={{
          width: '100%',
          height: '75%',
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '0.75rem 0.75rem 0rem 0rem',
        }}
      >
        <Image style={{ objectFit: 'cover' }} alt={`image-${props.index}`} src={props.tattoo.imageLink} />
      </div>
      <Box
        style={{
          backgroundColor: 'white',
          padding: '10px 20px',
          height: '25%',
          borderRadius: '0rem 0rem 0.75rem 0.75rem ',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <div className="flex justify-between">
          <h2
            className="font-bold text-lg whitespace-nowrap text-ellipsis overflow-hidden font-[Poppins]"
            style={{ maxWidth: '80%', fontWeight: 'bold' }}
          >
            {props.tattoo.title}
          </h2>
          {liked ? (
            <LikedIcon onClick={() => unlike(props.tattoo.id)} />
          ) : (
            <UnLikedIcon onClick={() => like(props.tattoo.id)} />
          )}
        </div>

        <Box className="flex justify-between gap-3" style={{ justifyContent: 'space-between' }}>
          <p className="overflow-hidden whitespace-nowrap text-base text-ellipsis font-[Poppins] max-w-[80%]">
            {props.tattoo.description}
          </p>

          <Box className="flex gap-3">
            {props.editable && <DeleteOutlined onClick={() => deleteTattoo()} />}
            {props.editable && <EditOutlined onClick={() => setShowModal(true)} />}
          </Box>
        </Box>
      </Box>
    </CardUI.Container>
  )
}
