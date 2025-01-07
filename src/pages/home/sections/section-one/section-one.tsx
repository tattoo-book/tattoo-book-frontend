import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import { useEffect, useState } from "react";
import {
    ITatttoo,
    TattooGateway,
} from "../../../../infra/gateways/TattooGateway";
import { SectionOneUI } from "./styles";

const { Background, Titulo, Content } = SectionOneUI;

export default function SectionOne() {
    const [tattoos, setTattoos] = useState<ITatttoo[]>([]);

    const convertBufferToImage = (buffer: Buffer) => {
        // const base64 = buffer.toString("base64");
        const imageSrc = `data:image/jpg;base64,${Buffer.from(buffer).toString(
            "base64"
        )}`;
        console.log(imageSrc);
        return imageSrc;
    };

    const getTattoos = async () => {
        try {
            const response = await TattooGateway.listAll();
            if (!response) return;
            response.forEach((tattoo) => {
                console.log(tattoo.imageName);
            });
            // const list = response.map((tattoo: ITatttoo) => ({
            //     ...tattoo,
            //     imageBase64: convertBufferToImage(tattoo.image),
            // }));
            // console.log("IMAGE: BUFFER: ", list[0].imageBase64);
            // setTattoos(list);
            console.log(
                `data:image/jpg;base64,${Buffer.from(
                    response[0].image
                ).toString("base64")}`
            );
        } catch (error) {
            console.log("TATTOO ERROR: ", error);
        }
    };

    useEffect(() => {
        getTattoos();
    }, []);

    const cards = [
        {
            title: "Image One",
            description: "Leão",
            image: "https://home.inkacademy.com.br/wp-content/uploads/2022/07/d7fd19f74cb33a9113f80978675611ca.jpg",
        },
        {
            title: "Image Two",
            description: "Leão",
            image: "https://static.wixstatic.com/media/8fe1c2_7026213f5cbe46b69f1eb4ce23a9dc45~mv2.jpg/v1/fill/w_564,h_846,al_c,q_85,enc_auto/8fe1c2_7026213f5cbe46b69f1eb4ce23a9dc45~mv2.jpg",
        },
        {
            title: "Image Three",
            description: "Leão",
            image: "https://belohorizontemg.com.br/wp-content/uploads/2022/01/tattoo-1049x800.jpg",
        },
        {
            title: "Image Four",
            description: "Lobo",
            image: "https://i.pinimg.com/736x/be/9d/6a/be9d6a28a024c718a38a7d742b2a0397.jpg",
        },
    ];

    return (
        <Background>
            <Titulo.Container>
                <Titulo.H2>Conheça alguns trabalhos populares</Titulo.H2>
            </Titulo.Container>
            <Content.Container className="px-20">
                <Content.CardList>
                    {cards.map((card, index) => (
                        <TattooCard index={index} card={card} />
                    ))}
                </Content.CardList>
            </Content.Container>
        </Background>
    );
}

interface ITattooCard {
    index: number;
    card: {
        title: string;
        description: string;
        image: string;
    };
}
const TattooCard = (props: ITattooCard) => {
    const [liked, setLiked] = useState(true);
    return (
        <Card
            hoverable
            style={{
                width: 320,
                height: 520,
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
                        src={props.card.image}
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
                            style={{
                                color: "red",
                                fontFamily: "Poppins",
                                fontSize: "22px",
                            }}
                        />
                    ) : (
                        <HeartOutlined
                            onClick={() => setLiked(true)}
                            style={{
                                fontFamily: "Poppins",
                                fontSize: "22px",
                            }}
                        />
                    )}
                </div>
                <div className="flex justify-between items-baseline">
                    <p style={{ fontFamily: "Poppins", fontSize: "18px" }}>
                        {props.card.description}
                    </p>
                    <a
                        style={{ fontFamily: "Poppins", color: "blue" }}
                        className="hover:opacity-50"
                    >
                        ver tatuador
                    </a>
                </div>
            </div>
        </Card>
    );
};
