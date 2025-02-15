import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { useListTattoos } from "../../hooks/tattoos/list-tattoos";
import { ITattoo } from "../../infra/tattoos/tattoo.interface";
import { TattooModal } from "./components/modal/modal";
import { TattooPageListUI } from "./styles";

const { Background, List, Input } = TattooPageListUI;

export default function TattooPageList() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalCard, setModalCard] = useState<ITattoo | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

  const { isLoading, data: tattoos, refetch } = useListTattoos({ search: { searchValues: searchTerm } });

  const onChange = (value: string) => {
    setSearchTerm(value == "" ? undefined : value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      refetch();
    }, 500); // Debounce de 500ms para evitar muitas requisições

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, refetch]);

  const openModal = (index: number) => {
    if (tattoos) setModalCard(tattoos[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalCard(null);
    setShowModal(false);
  };

  return (
    <Background>
      <TattooModal showModal={showModal} card={modalCard} close={closeModal} />
      <Input.Container>
        <div className="flex">
          <Input.Search
            onChange={(event) => onChange(event.target.value)}
            placeholder="Procure por tatuador, tatuagens, estilo ... "
          />
          <Input.Button onClick={() => console.log("Click")}>
            <SearchOutlined style={{ color: "#bf8a6b", fontSize: "22px" }} />
          </Input.Button>
        </div>
      </Input.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <List.Container>
          {tattoos?.map((tattoo, index) => (
            <List.ImageContainer key={index}>
              <List.Image src={tattoo.imageLink} onClick={() => openModal(index)} />
            </List.ImageContainer>
          ))}
        </List.Container>
      )}
    </Background>
  );
}
