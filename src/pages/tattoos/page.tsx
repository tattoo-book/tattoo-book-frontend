import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ITattoo, TattooGateway } from "../../infra/gateways/TattooGateway/tattoo.gateway";
import { TattooModal } from "./components/modal/modal";
import { TattooPageListUI } from "./styles";

const { Background, List, Input } = TattooPageListUI;

export default function TattooPageList() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalCard, setModalCard] = useState<ITattoo | null>(null);
  const [tattoos, setTattoos] = useState<ITattoo[]>([]);

  const loadTattoos = async () => {
    try {
      await TattooGateway.list().then((res) => setTattoos([...res, ...res, ...res]));
    } catch (error) {
      console.log("ERROR ON LOAD TATTOOS: ", error);
    }
  };

  const onSearch = () => {
    console.log("Searching ...");
  };

  const openModal = (index: number) => {
    setModalCard(tattoos[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalCard(null);
    setShowModal(false);
  };

  useEffect(() => {
    loadTattoos();
  }, []);

  return (
    <Background>
      <TattooModal showModal={showModal} card={modalCard} close={closeModal} />
      <Input.Container>
        <div className="flex">
          <Input.Search placeholder="Procure por tatuador, tatuagens, estilo ... " />
          <Input.Button onClick={onSearch}>
            <SearchOutlined style={{ color: "#bf8a6b", fontSize: "22px" }} />
          </Input.Button>
        </div>
      </Input.Container>
      <List.Container>
        {tattoos.map((tattoo, index) => (
          <List.ImageContainer key={index}>
            <List.Image src={tattoo.imageLink} onClick={() => openModal(index)} />
          </List.ImageContainer>
        ))}
      </List.Container>
    </Background>
  );
}
