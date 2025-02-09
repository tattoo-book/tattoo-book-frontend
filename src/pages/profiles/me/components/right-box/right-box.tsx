import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
}

export const RigthBox = (props: IRigthBox) => {
  if (props.content == "tattoo-list") return <TattooList />;
  return <div></div>;
};
