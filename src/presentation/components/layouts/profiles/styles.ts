import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(3px);
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RighContainer = styled.div`
  height: 100%;
  width: 80%;
`

const LeftContainer = styled.div`
  height: 100%;
  max-width: 20%;
  min-width: 350px;
  padding: 20px 0px;
`

export const ProfileLayoutUI = { Background: Background, RighContainer: RighContainer, LeftContainer: LeftContainer }
