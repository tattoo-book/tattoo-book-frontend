'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { ProfilesLayout } from '../../../../components/layouts/profiles/layout'
import { Loading } from '../../../../components/loading'
import { useGetSingleTattooArtist } from '../../../../hooks/tattoo-artist/get-single-tattoo-artist'
import { LeftBox } from './components/left-box/left-box'
import { RigthBox } from './components/right-box/right-box'

export default function TattooArtistPage() {
  const { id } = useParams()
  const [rigthBoxContent, setRigthBoxContent] = useState<string>('tattoo-list')

  const { isLoading, error, data: tattooArtist } = useGetSingleTattooArtist(id) // Use o hook

  if (isLoading) return <Loading />

  if (error) return <div>Error loading tattoo artist info.</div>

  if (!tattooArtist) return <div>Tattoo artist not found.</div>

  const changeTab = (tabSelected: string) => setRigthBoxContent(tabSelected)

  return (
    <ProfilesLayout
      leftContent={<LeftBox artist={tattooArtist} content={rigthBoxContent} changeTab={changeTab} />}
      rigthContent={<RigthBox id={id} />}
    />
  )
}
