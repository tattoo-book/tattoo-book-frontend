import styled from "styled-components";
import { BackgroundComponent } from "../../../../components/Background/style";

const Background = styled(BackgroundComponent)`
  background-color: var(--elegance-off-white);
`;

const HeartCard = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff4d6d;
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  clip-path: polygon(50% 0%, 100% 35%, 85% 100%, 50% 80%, 15% 100%, 0% 35%);
`;

const HeartAnimation = styled(HeartCard)`
  transform: scale(1.2);
  animation: heartbeat 0.6s infinite ease-in-out;
`;

const TituloContainer = styled.div`
  width: 100%;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Titulo = styled.h2`
  color: var(--elegance-black);
  text-transform: capitalize;
  font-size: 42px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentCardLIst = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  width: 80%;
  height: 100%;
`;

const CarouselCard = styled.div`
  height: 70vh;
`;

export const SectionOneUI = {
  Background,
  Titulo: {
    Container: TituloContainer,
    H2: Titulo,
  },
  Content: {
    Container: ContentContainer,
    CardList: ContentCardLIst,
    Carousel: {
      Card: CarouselCard,
    },
  },
};
