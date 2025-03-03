import styled from "styled-components";

const Background = styled.div`
  width: 99vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
  background-color: #000000f1;
`;

const ModalFooter = styled.div``;

export const RegisterTattooModalUI = {
  Background,
  Modal: {
    Footer: ModalFooter,
  },
};
