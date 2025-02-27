'use client'
import { useGetInfoMe } from '@/presentation/hooks/users/get-info-me'
import { useState } from 'react'
import { ProfilesLayout } from '../../../components/layouts/profiles/layout'
import { Loading } from '../../../components/loading'
import { TattooArtistUserProfile } from './components/left-box/tattoo-artist-user-profile'
import { UserProfile } from './components/left-box/user-profile'
import { ModalRegisterTattoo } from './components/modal/modal'
import { RigthBox } from './components/right-box/right-box'

export function ProfilePageMe() {
  const [rigthBoxContent, setRigthBoxContent] = useState<string>('favorites')
  const [showModal, setShowModal] = useState<boolean>(false)

  const { isLoading, error, data, refetch } = useGetInfoMe()
  if (isLoading) return <Loading />
  if (error) return <div>Failed on get info me</div>

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <ModalRegisterTattoo showModal={showModal} close={closeModal} />

      <ProfilesLayout
        leftContent={
          data?.tattooArtist ? (
            <TattooArtistUserProfile
              changeTab={(tab: string) => setRigthBoxContent(tab)}
              profileInfo={data}
              openModal={openModal}
            />
          ) : (
            <UserProfile profileInfo={data} />
          )
        }
        rigthContent={
          <RigthBox
            content={rigthBoxContent}
            refetch={refetch}
            tattooList={data?.tattooArtist ? data?.tattooArtist.tattoos : data?.tattoos}
            favorits={data?.tattoos}
            isTattooArtist={!!data?.tattooArtist}
          />
        }
      />
    </div>
  )
}
