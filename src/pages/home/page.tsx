import { HomeUI } from "./styles";

const { Background, BackgroundGlass, Header, Content } = HomeUI;
const { Titulo, SubTitulo } = Content;

export default function HomePage() {
    return (
        <div className="flex flex-col w-screen">
            <Background>
                <BackgroundGlass>
                    <Header.Container>
                        <Header.Nav>
                            <Header.Link>Tatuagens</Header.Link>
                            <Header.Link>Tatuadores</Header.Link>
                            <Header.Link>Estudios</Header.Link>
                        </Header.Nav>
                        <img
                            className="max-h-full"
                            src="https://static.wixstatic.com/media/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png/v1/fill/w_640,h_656,fp_0.49_0.41,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png"
                        />
                        <Header.Nav>
                            <Header.Link>Novidades</Header.Link>
                            <Header.Link>Sobre nos</Header.Link>
                            <Header.Link>Contato</Header.Link>
                        </Header.Nav>
                    </Header.Container>

                    <Content.Container className="flex flex-col gap-14 items-center justify-center">
                        <div className="flex flex-col items-center">
                            <Titulo>Marque seus momentos</Titulo>
                            <SubTitulo>
                                Encontre as melhores ideias e profissionais
                            </SubTitulo>
                        </div>
                        <Content.Button>Ver mais</Content.Button>
                    </Content.Container>
                </BackgroundGlass>
            </Background>
        </div>
    );
}