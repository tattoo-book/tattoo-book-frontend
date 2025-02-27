import styled from "styled-components";

const BackgroundGlass = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);

  display: flex;

  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: xx-large;
  color: var(--elegance-off-white);
`;

const H2 = styled.h2`
  text-align: center;
  font-size: x-large;
  color: var(--elegance-off-white);
`;

export const PageNotImplementedUI = {
  BackgroundGlass,
  H1,
  H2,
};
