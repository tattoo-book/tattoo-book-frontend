import { Image, Modal } from "antd";
import { useState } from "react";
import { LikedIcon } from "../../../../components/icons/liked.icon";
import { UnLikedIcon } from "../../../../components/icons/unliked.icon";
import { TattooActions } from "../../../../infra/tattoos/tattoo.actions";
import { ITattoo } from "../../../../infra/tattoos/tattoo.interface";
import { TattooModalUI } from "./styles";

export interface ITattooInfo {
  title: string;
  description: string;
  image: string;
}

export interface ITattooCard {
  close: () => void;
  showModal: boolean;
  tattoo: ITattoo | null;
}

export const TattooModal = (props: ITattooCard) => {
  const { close, showModal } = props;
  const [liked, setLiked] = useState(props.tattoo?.liked);
  const tattoo = props.tattoo;

  const like = () => {
    TattooActions.like(tattoo?.id!);
    setLiked(true);
  };

  const unlike = () => {
    TattooActions.unlike(tattoo?.id!);
    setLiked(false);
  };

  const icon = liked ? <LikedIcon onClick={() => unlike()} /> : <UnLikedIcon onClick={() => like()} />;

  return (
    <Modal title={tattoo?.title} centered open={showModal} footer={[]} onCancel={() => close()}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Image src={tattoo?.imageLink} style={{ maxHeight: "150px", maxWidth: "150px" }} />
          <div>
            <p>{tattoo?.description}</p>
            <p>{icon}</p>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <p>{tattoo?.tattooArtist.name}</p>
        </div>
      </div>
      <TattooModalUI.Modal.Footer></TattooModalUI.Modal.Footer>
    </Modal>
  );
};
