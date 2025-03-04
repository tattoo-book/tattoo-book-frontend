'use client'
import { TattooActions } from '@/external/tattoos/tattoo.actions'
import { Box } from '@/presentation/components/box/box'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import Link from 'next/link'
import { useState } from 'react'
import { ITattooCard } from '../most-populary.type'
import { CardUI } from './card.styles'

export const TattooCard = (props: ITattooCard) => {
  const [liked, setLiked] = useState(props.tattoo.liked)

  const like = async (id: number) => {
    TattooActions.like(id)
    setLiked(true)
  }

  const unlike = async (id: number) => {
    TattooActions.unlike(id)
    setLiked(false)
  }

  return (
    <CardUI.Card
      hoverable
      style={{ width: 320, height: 500 }}
      cover={
        <div className="h-full w-full">
          <Image
            alt={`image-${props.index}`}
            style={{
              width: 320,
              height: 380,
              borderRadius: '0.75rem 0.75rem 0rem 0rem',
            }}
            src={props.tattoo.imageLink}
          />
        </div>
      }
    >
      <Box>
        <div className="flex justify-between">
          <h2 className="font-semibold" style={{ fontSize: '22px', whiteSpace: 'nowrap' }}>
            {`${props.tattoo.title}`}
          </h2>
          {liked ? (
            <HeartFilled
              onClick={() => unlike(props.tattoo.id)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration- heartbeat 0.6s infinite ease-in-out"
              style={{ color: 'red', fontFamily: 'Poppins', fontSize: '22px' }}
            />
          ) : (
            <HeartOutlined
              onClick={() => like(props.tattoo.id)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration-300 heartbeat 0.6s infinite ease-in-out"
              style={{ fontFamily: 'Poppins', fontSize: '22px' }}
            />
          )}
        </div>

        <div className="flex justify-between items-baseline">
          <p
            className="size-4 whitespace-nowrap text-ellipsis overflow-hidden"
            style={{ fontFamily: 'Poppins', width: '70%' }}
          >
            {`${props.tattoo.description}`}
          </p>
          <Link href={`/profiles/tattoo-artist/${props.tattoo.tattooArtistId}`}> ver tatuador</Link>
        </div>
      </Box>
    </CardUI.Card>
  )
}
