import { ILeftBox } from '../layout.interfaces'
import { ProfileLayoutUI } from '../styles'

export const LeftBox = (props: ILeftBox) => {
  return <ProfileLayoutUI.LeftContainer>{props.children}</ProfileLayoutUI.LeftContainer>
}
