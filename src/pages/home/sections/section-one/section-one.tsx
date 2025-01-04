import { SectionOneUI } from "./styles";

const { Background, Titulo, Content } = SectionOneUI;

export default function SectionOne() {
    return (
        <Background>
            <Titulo.Container>
                <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
            </Titulo.Container>
            <Content.Container className="px-20"></Content.Container>
        </Background>
    );
}
