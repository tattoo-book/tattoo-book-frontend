import styled from 'styled-components'

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 40px;
`

const LeftContainer = styled.div`
  height: 100%;
  max-width: 20%;
  min-width: 350px;
  padding: 20px 40px;
  background: white;
`

export const ProfileLayoutUI = { Background: Background, RighContainer: Container, LeftContainer: LeftContainer }
