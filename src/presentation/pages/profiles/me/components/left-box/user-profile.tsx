'use client'
import { User } from '@/infra/users/user.type'
import { useState } from 'react'
import SelectTab from '../../../../../components/sidebar/select-tab'

export interface ILeftBox {
  profileInfo: User | undefined
}

export const UserProfile = (props: ILeftBox) => {
  const [tabSelected, setTabSelect] = useState<string>('favorites')

  const teste: React.CSSProperties = { background: 'rgb(229 231 235 / var(--tw-bg-opacity, 1))' }

  const favorites = (blocked: boolean) => (tabSelected == 'favorites' && blocked ? teste : { cursor: 'default' })
  const myInfo = (blocked: boolean) => (tabSelected == 'my-info' && blocked ? teste : { cursor: 'default' })
  const horarios = (blocked: boolean) => (tabSelected == 'horarios' && blocked ? teste : { cursor: 'default' })
  const historico = (blocked: boolean) => (tabSelected == 'historico' && blocked ? teste : { cursor: 'default' })

  const onClick = (value: string) => setTabSelect(value)

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
        <SelectTab onClick={() => onClick('favorites')} style={favorites(true)} label="Meu Favoritos" />
        <SelectTab style={horarios(false)} blocked label="Horarios Agendados" />
        <SelectTab style={historico(false)} blocked label="Histórico" />
      </div>
    </div>
  )
}
