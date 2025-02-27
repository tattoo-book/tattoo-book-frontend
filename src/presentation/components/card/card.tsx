import { TattooActions } from '@/infra/tattoos/tattoo.actions'
import { TattooGateway } from '@/infra/tattoos/tattoo.gateway'
import { ITattoo } from '@/infra/tattoos/tattoo.interface'
import { User } from '@/infra/users/user.type'
import { DeleteOutlined, EditOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'
import { Image } from 'antd'
import { useState } from 'react'
import { ModalUpdateTattoo } from './components/modal/modal'
import { CardUI } from './styles'

export interface ICard {
  index: number
  tattoo: ITattoo
  like?: () => void
  unlike?: () => void
  style?: React.CSSProperties
  editable?: boolean
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<User, Error>>
}

export function TattooCard(props: ICard) {
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

  const renderHeartOutlined = () => {
    return (
      <HeartOutlined
        onClick={() => like(props.tattoo.id)}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-200 ease-in-out"
        style={{ fontFamily: 'Poppins', fontSize: '18px' }}
      />
    )
  }

  const renderHeartFilled = () => {
    return (
      <HeartFilled
        onClick={() => unlike(props.tattoo.id)}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-300 ease-in-out"
        style={{ color: 'red', fontFamily: 'Poppins', fontSize: '18px' }}
      />
    )
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
      <div
        style={{ background: '#fff', height: '25%', padding: '10px 20px', borderRadius: '0rem 0rem 0.75rem 0.75rem ' }}
      >
        <div className="flex justify-between">
          <h2
            style={{
              fontSize: '18px',
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              maxWidth: '80%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {props.tattoo.title}
          </h2>
          {liked ? renderHeartFilled() : renderHeartOutlined()}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <p
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {props.tattoo.description}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {props.editable && <DeleteOutlined onClick={() => deleteTattoo()} />}
            {props.editable && <EditOutlined onClick={() => setShowModal(true)} />}
          </div>
        </div>
      </div>
    </CardUI.Container>
  )
}
