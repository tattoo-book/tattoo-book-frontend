import { Image, Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <Modal title={tattoo?.title} centered open={showModal} footer={[]} onCancel={() => close()}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          <Image src={tattoo?.imageLink} style={{ height: "250px", width: "100%" }} />
          <div
            style={{
              display: "flex",
              gap: "20px",
              width: "80%",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* <p>{tattoo?.description}</p> */}
            <Link to={`/profiles/tattoo-artist/${props.tattoo?.tattooArtistId}`}> ver tatuador</Link>
            <p>{liked ? <LikedIcon onClick={() => unlike()} /> : <UnLikedIcon onClick={() => like()} />}</p>
          </div>
        </div>
      </div>
      <TattooModalUI.Modal.Footer></TattooModalUI.Modal.Footer>
    </Modal>
  );
};
