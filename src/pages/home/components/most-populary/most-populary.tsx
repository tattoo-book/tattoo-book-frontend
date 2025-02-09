import { Loading } from "../../../../components/loading";
import { useListTattoos } from "../../../../hooks/tattoos/list-tattoos";
import { TattooCard } from "./card/card";
import { MostPopularuTattoosUI } from "./styles";

const { Background, Titulo, Content } = MostPopularuTattoosUI;

export function MostPopularyTattoos() {
  const { isLoading, data } = useListTattoos({ order: { popularity: "desc" }, pageSize: 4 });

  return (
    <Background>
      <Titulo.Container>
        <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
      </Titulo.Container>
      <Content.Container className="px-20">
        {isLoading ? (
          <Loading />
        ) : (
          <Content.CardList>
            {data?.map((card, index) => (
              <TattooCard index={index} card={card} />
            ))}
          </Content.CardList>
        )}
      </Content.Container>
    </Background>
  );
}
