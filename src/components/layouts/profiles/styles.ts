import styled from "styled-components";

const BackgroundGlass = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(3px);
`;

const Container = styled.div`
  height: 100%;
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
`;

const Content = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  gap: 50px;

  @media (max-width: 1366px) {
    gap: 30px;
    width: 95%;
  }
`;

export const ProfileLayoutUI = { BackgroundGlass, Container, Content };
