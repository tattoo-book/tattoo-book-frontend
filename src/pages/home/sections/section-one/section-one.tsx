import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITattoo, TattooGateway } from "../../../../infra/gateways/TattooGateway/tattoo.gateway";
import { SectionOneUI } from "./styles";

const { Background, Titulo, Content } = SectionOneUI;

export default function SectionOne() {
  const [tattoos, setTattoos] = useState<ITattoo[]>([]);

  const getTattoos = async () => {
    try {
      const response = await TattooGateway.list();
      if (!response) return;
      response.forEach((tattoo) => {
        console.log(tattoo.imageName);
        setTattoos(response);
      });
    } catch (error) {
      console.log("TATTOO ERROR: ", error);
    }
  };

  useEffect(() => {
    getTattoos();
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

interface ITattooCard {
  index: number;
  card: ITattoo;
}
const TattooCard = (props: ITattooCard) => {
  const [liked, setLiked] = useState(true);
  const { index } = props;

  return (
    <Card
      hoverable
      style={{
        width: 320,
        height: 520,
        backgroundColor: "#f2eeeb",
        borderRadius: "0.75rem",
        boxShadow: "2px 2px 15px #5e5e5e75",
      }}
      cover={
        <div className="h-full w-full">
          <Image
            alt={`image-${props.index}`}
            style={{
              width: 320,
              height: 400,
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
            }}
            src={props.card.imageLink}
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-between">
          <h2 className="font-semibold" style={{ fontSize: "22px" }}>
            {props.card.title}
          </h2>
          {liked ? (
            <HeartFilled
              onClick={() => setLiked(false)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration- heartbeat 0.6s infinite ease-in-out"
              style={{
                color: "red",
                fontFamily: "Poppins",
                fontSize: "22px",
              }}
            />
          ) : (
            <HeartOutlined
              onClick={() => setLiked(true)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration-300 heartbeat 0.6s infinite ease-in-out"
              style={{
                fontFamily: "Poppins",
                fontSize: "22px",
              }}
            />
          )}
        </div>
        <div className="flex justify-between items-baseline">
          <p style={{ fontFamily: "Poppins", fontSize: "18px" }}>{props.card.description}</p>
          <Link to={`/profiles/tattoo-artist/${index}`}> ver tatuador</Link>
        </div>
      </div>
    </Card>
  );
};
