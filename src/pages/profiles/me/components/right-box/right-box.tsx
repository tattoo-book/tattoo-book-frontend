import { ITattoo } from "../../../../../infra/tattoos/tattoo.interface";
import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
  tattooList: ITattoo[] | undefined;
  isTattooArtist: boolean;
}

export const RigthBox = (props: IRigthBox) => {
  if (props.content == "tattoo-list")
    return !props.isTattooArtist ? <TattooList tattoos={props.tattooList} /> : <div></div>;
  return <div></div>;
};
