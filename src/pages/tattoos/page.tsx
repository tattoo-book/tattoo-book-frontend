import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log("Seting image selected");
      setSelectedFile(event.target.files[0]);
      uploadImage();
    } else {
      console.log("Nenhuma imagem recebida");
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Selecione uma imagem antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploadStatus("Enviando...");
      // remake request to use
      const response = await axios
        .post(`http://localhost:3000/tattoos/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => res.data);

      if (!response.ok) {
        throw new Error("Erro ao enviar imagem.");
      }

      setUploadStatus("Upload concluído!");
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      setUploadStatus("Erro no upload.");
    }
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
          {/* <div style={{ marginTop: "20px", textAlign: "center" }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={() => uploadImage()} style={{ marginLeft: "10px", cursor: "pointer" }}>
              Enviar Imagem
            </button>
            {uploadStatus && <p>{uploadStatus}</p>}
          </div> */}
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
