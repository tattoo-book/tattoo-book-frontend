import { useEffect, useState } from "react";
import { TattooGateway } from "../../../../infra/tattoos/tattoo.gateway";
import { ITattoo } from "../../../../infra/tattoos/tattoo.interface";
import { TattooCard } from "./card/card";
import { MostPopularuTattoosUI } from "./styles";

const { Background, Titulo, Content } = MostPopularuTattoosUI;

export function MostPopularyTattoos() {
  const [tattoos, setTattoos] = useState<ITattoo[]>([]);

  const loadMostPopularyTattoos = async () => {
    await TattooGateway.list({ order: { popularity: "desc" }, take: 4 })
      .then((res) => {
        setTattoos(res);
      })
      .catch((err) => {
        console.log("TATTOO ERROR: ", err);
      });
  };

  useEffect(() => {
    loadMostPopularyTattoos();
  }, []);

  return (
    <Background>
      <Titulo.Container>
        <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
      </Titulo.Container>
      <Content.Container className="px-20">
        <Content.CardList>
          {tattoos.map((card, index) => (
            <TattooCard index={index} card={card} />
          ))}
        </Content.CardList>
      </Content.Container>
    </Background>
  );
}
