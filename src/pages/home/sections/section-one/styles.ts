import styled from "styled-components";
import { BackgroundComponent } from "../../../../components/Background/style";

// const Background = styled.div`
//     height: 100vh;
//     width: 100%;
// `;
const Background = styled(BackgroundComponent)`
    background-color: var(--elegance-off-white);
`;

const TituloContainer = styled.div`
    width: 100%;
    height: 20%;

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
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarouselCard = styled.div`
    height: 80vh;
    /* width: 80vw; */
`;

export const SectionOneUI = {
    Background,
    Titulo: {
        Container: TituloContainer,
        H2: Titulo,
    },
    Content: {
        Container: ContentContainer,
        Carousel: {
            Card: CarouselCard,
        },
    },
};
