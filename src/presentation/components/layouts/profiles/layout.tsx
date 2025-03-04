import { IProfilesLayout } from './layout.interfaces'
import { LeftBox } from './left-box/left-box'
import { RigthBox } from './rigth-box/right-box'
import { ProfileLayoutUI } from './styles'

const { Background } = ProfileLayoutUI

export function ProfilesLayout(props: Readonly<IProfilesLayout>) {
  return (
    <Background>
      <LeftBox>{props.leftContent}</LeftBox>
      <RigthBox>{props.rigthContent}</RigthBox>
    </Background>
  )
}
