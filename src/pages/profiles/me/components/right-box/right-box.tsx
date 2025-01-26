import { TattooArtistProfileComponentsUI } from "../styles";
import { TattooList } from "./tattoos-list/tattoo-list";

const { Container } = TattooArtistProfileComponentsUI;

interface IRigthBox {
  content: string;
}

export const RigthBox = (props: IRigthBox) => {
  return <TattooList />;
};
