import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
}

export const RigthBox = (_props: IRigthBox) => {
  return <TattooList />;
};
