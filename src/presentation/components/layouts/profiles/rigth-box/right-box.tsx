import { Box } from '@/presentation/components/box/box'
import { IRigthBox } from '../layout.interfaces'
import { ProfileLayoutUI } from '../styles'

export const RigthBox = (props: IRigthBox) => {
  return (
    <ProfileLayoutUI.RighContainer style={{ maxWidth: '100%', padding: '20px 30px' }}>
      <Box
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          padding: '20px',
          borderRadius: '0.5rem',
        }}
      >
        {props.children}
      </Box>
    </ProfileLayoutUI.RighContainer>
  )
}
