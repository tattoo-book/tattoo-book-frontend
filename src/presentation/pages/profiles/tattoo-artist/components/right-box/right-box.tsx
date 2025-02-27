import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
  id: string | undefined;
}

export const RigthBox = (props: IRigthBox) => {
  return <TattooList id={props.id} />;
};
