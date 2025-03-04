import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
`

const LeftBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0.5rem;
  gap: 2.5rem;
`

const LeftBoxBox = styled.div``

const ProfileImg = styled.div`
  background: #8d8d8d;
  height: 176px;
  width: 176px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TattooArtistProfileComponentsUI = {
  Container: Container,
  LeftBox: {
    Container: LeftBoxContainer,
    Box: LeftBoxBox,
    ProfileImg: ProfileImg,
  },
}
