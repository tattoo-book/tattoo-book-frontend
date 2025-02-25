import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

const ListContainer = styled.div`
  height: 80vh;
  margin-top: 20vh;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  grid-auto-rows: auto; /* Ajusta automaticamente a altura das linhas */
  padding-right: 2rem;
  overflow-y: scroll;
  margin-bottom: 50px;
`;

const ListImageContainer = styled.div`
  display: block;
`;

const ListImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Sombra */
  transition: transform 0.3s ease;
  display: block; /* Garante espaçamento correto */

  &:hover {
    transform: scale(1.05);
  }
`;

const SearchContainer = styled.div`
  height: 20vh;
  width: 100%;
  padding: 0% 15%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputButton = styled.div`
  width: 70px;
  border-radius: 0px 0.5rem 0.5rem 0rem;
  height: 50px;
  background-color: var(--elegance-dark-brown);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  padding-left: 1rem;
  outline: none;
  font-family: "Poppins";
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
`;

export const TattooPageListUI = {
  Background,
  List: {
    Container: ListContainer,
    Image: ListImage,
    ImageContainer: ListImageContainer,
  },
  Input: {
    Container: SearchContainer,
    Button: InputButton,
    Search: InputSearch,
  },
};
