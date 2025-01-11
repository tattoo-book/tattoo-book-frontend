import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ITattooInfo, TattooModal } from "./components/modal/modal";
import { TattooPageListUI } from "./styles";

const { Background, List, Input } = TattooPageListUI;

export default function TattooPageList() {
    const cards: ITattooInfo[] = [
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

    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalCard, setModalCard] = useState<ITattooInfo | null>(null);

    const onSearch = () => {
        console.log("Searching ...");
    };

    const openModal = (index: number) => {
        console.log(cards[index]);
        setModalCard(cards[index]);
        setShowModal(true);
    };

    const closeModal = () => {
        setModalCard(null);
        setShowModal(false);
    };

    return (
        <Background>
            <TattooModal
                showModal={showModal}
                card={modalCard}
                close={closeModal}
            />
            <Input.Container>
                <div className="flex">
                    <Input.Search placeholder="Procure por tatuador, tatuagens, estilo ... " />
                    <Input.Button onClick={onSearch}>
                        <SearchOutlined
                            style={{ color: "#bf8a6b", fontSize: "22px" }}
                        />
                    </Input.Button>
                </div>
            </Input.Container>
            <List.Container>
                {cards.map((card, index) => (
                    <List.ImageContainer key={index}>
                        <List.Image
                            src={card.image}
                            onClick={() => openModal(index)}
                        />
                    </List.ImageContainer>
                ))}
            </List.Container>
        </Background>
    );
}
