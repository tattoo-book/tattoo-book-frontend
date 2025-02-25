import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { ITattoo } from "../../../../../infra/tattoos/tattoo.interface";
import { User } from "../../../../../infra/users/user.type";
import { TattooListFavorits } from "./tattoos-list-favorits/tattoo-list-favorits";
import { TattooList } from "./tattoos-list/tattoo-list";

interface IRigthBox {
  content: string;
  tattooList: ITattoo[] | undefined;
  favorits: ITattoo[] | undefined;
  isTattooArtist: boolean;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<User, Error>>;
}

export const RigthBox = (props: IRigthBox) => {
  if (props.content == "tattoo-list") return <TattooList refetch={props.refetch} tattoos={props.tattooList} />;
  if (props.content == "favorites") {
    return (
      <TattooListFavorits refetch={props.refetch} tattoos={props.favorits?.filter((Item) => Item.liked == true)} />
    );
  }

  return <div></div>;
};
