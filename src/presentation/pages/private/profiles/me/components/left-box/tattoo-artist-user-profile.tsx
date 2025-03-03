'use client'
import { SchedulingTimes } from '@/external/tattoo-artist/tattoo-artist.type'
import { User } from '@/external/users/user.type'
import { useState } from 'react'
import { ButtonComponent } from '../../../../../../components/button/button'
import SelectTab from '../../../../../../components/sidebar/select-tab'
import { SchedulingTime } from './scheduling-times'

export interface ILeftBox {
  profileInfo: User | undefined
  openModal: () => void
  changeTab: (tab: string) => void
}

export const TattooArtistUserProfile = (props: ILeftBox) => {
  const [tabSelected, setTabSelect] = useState<string>('favorites')

  const getScheduling = (schedulings: SchedulingTimes[] | undefined) => {
    let result = 'Fechado'
    if (!schedulings) return 'Fechado'

    schedulings.forEach((sche, index) => {
      if (index == 0) result = sche.start + ' as ' + sche.end
      else result += ', ' + sche.start + ' as ' + sche.end
    })

    return result
  }

  const onClick = (value: string) => {
    props.changeTab(value)
    setTabSelect(value)
  }

  const teste: React.CSSProperties = { background: 'rgb(229 231 235 / var(--tw-bg-opacity, 1))' }

  const favorites = (blocked: boolean) => (tabSelected == 'favorites' && blocked ? teste : { cursor: 'default' })
  const myInfo = (blocked: boolean) => (tabSelected == 'my-info' && blocked ? teste : { cursor: 'default' })
  const myTattoos = (blocked: boolean) => (tabSelected == 'tattoo-list' && blocked ? teste : { cursor: 'default' })

  return (
    <div className="flex flex-col items-center gap-10 w-full h-full p-2">
      <div style={{ background: '#8d8d8d', height: '180px', width: '180px', borderRadius: '50%', overflow: 'hidden' }}>
        <img
          src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png"
          alt="profile-img"
          style={{ height: '180px', width: '180px' }}
        />
      </div>
      <div className="w-full py-0 px-3 flex flex-col items-center">
        <p style={{ fontSize: '18px' }}>{props.profileInfo?.name}</p>
        <p style={{ fontSize: '18px', fontWeight: 'normal' }}>@{props.profileInfo?.name.split(' ')[0]}</p>
      </div>

      <div className="w-full px-3 py-0 flex flex-col justify-start gap-3">
        <SelectTab style={myInfo(false)} blocked label="Informações do Perfil" />
        <SelectTab onClick={() => onClick('tattoo-list')} style={myTattoos(true)} label="Minhas Tatuagens" />
        <SelectTab onClick={() => onClick('favorites')} style={favorites(true)} label="Favoritos" />
      </div>

      <div
        style={{ maxHeight: '26%' }}
        className="w-full py-0 px-6 flex flex-col justify-center items-start text-base overflow-x-hidden"
      >
        <p>Horários de atendimento</p>
        <SchedulingTime day="DOM:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.sunday)} />
        <SchedulingTime day="SEG:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.monday)} />
        <SchedulingTime day="TER:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.tuesday)} />
        <SchedulingTime day="QUA:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.wednesday)} />
        <SchedulingTime day="QUI:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.thursday)} />
        <SchedulingTime day="SEX:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.friday)} />
        <SchedulingTime day="SAB:" hours={getScheduling(props.profileInfo?.tattooArtist?.schedulings.saturday)} />
      </div>
      <ButtonComponent
        onClick={() => props?.openModal()}
        style={{ height: '50px', width: '90%', textTransform: 'capitalize' }}
      >
        Adicionar Tatuagem
      </ButtonComponent>
    </div>
  )
}
