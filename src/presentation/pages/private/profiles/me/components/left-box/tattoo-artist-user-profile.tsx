'use client'
import { LogoURL } from '@/core/consts/logo'
import { User } from '@/external/users/user.type'
import { Box } from '@/presentation/components/box/box'
import { Typography } from '@/presentation/components/typograph/typograph.styles'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ButtonComponent } from '../../../../../../components/button/button'
import SelectTab from '../../../../../../components/sidebar/select-tab'
import { TattooArtistProfileComponentsUI } from '../styles'

export interface ILeftBox {
  profileInfo: User | undefined
  openModal: () => void
  changeTab: (tab: string) => void
}

const { LeftBox } = TattooArtistProfileComponentsUI
const { Paragraph } = Typography

export const TattooArtistUserProfile = (props: ILeftBox) => {
  const [tabSelected, setTabSelect] = useState<string>('favorites')
  const navigate = useRouter()

  const onClick = (value: string) => {
    props.changeTab(value)
    setTabSelect(value)
  }

  const teste: React.CSSProperties = { background: 'rgb(229 231 235 / var(--tw-bg-opacity, 1))' }

  const favorites = (blocked: boolean) => (tabSelected == 'favorites' && blocked ? teste : { cursor: 'default' })
  const myInfo = (blocked: boolean) => (tabSelected == 'my-info' && blocked ? teste : { cursor: 'default' })
  const myTattoos = (blocked: boolean) => (tabSelected == 'tattoo-list' && blocked ? teste : { cursor: 'default' })

  return (
    <LeftBox.Container>
      <Box className="w-full h-full">
        <Box
          style={{
            height: '3rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          }}
          className="hover:text-gray-200"
          onClick={() => navigate.back()}
        >
          <ArrowLeftOutlined /> Voltar
        </Box>
        <Box className="flex w-full h-full flex-col items-center gap-10" style={{ gap: '2rem' }}>
          <LeftBox.ProfileImg>
            <img src={LogoURL} alt="profile-img" className="h-44 w-44" />
          </LeftBox.ProfileImg>

          <Box className="w-full flex flex-col gap-10  items-center">
            <Paragraph className="text-base font-normal">@{props.profileInfo?.name}</Paragraph>
          </Box>

          <Box className="w-full flex flex-col justify-start gap-3">
            <SelectTab style={myInfo(false)} blocked label="Informações do Perfil" />
            <SelectTab onClick={() => onClick('tattoo-list')} style={myTattoos(true)} label="Minhas Tatuagens" />
            <SelectTab onClick={() => onClick('favorites')} style={favorites(true)} label="Favoritos" />
          </Box>
        </Box>
      </Box>

      <ButtonComponent onClick={() => props?.openModal()} className="h-12 w-full capitalize">
        Adicionar Tatuagem
      </ButtonComponent>
    </LeftBox.Container>
  )
}
