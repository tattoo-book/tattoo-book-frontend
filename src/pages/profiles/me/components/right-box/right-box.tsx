import { ITattoo } from "../../../../../infra/tattoos/tattoo.interface";
import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
  tattooList: ITattoo[] | undefined;
  favorits: ITattoo[] | undefined;
  isTattooArtist: boolean;
}

export const RigthBox = (props: IRigthBox) => {
  console.log("CONTENT", props.content);
  if (props.content == "tattoo-list") return <TattooList tattoos={props.tattooList} />;
  if (props.content == "favorites") {
    return <TattooList tattoos={props.favorits?.filter((Item) => Item.liked == true)} />;
  }

  return <div></div>;
};
