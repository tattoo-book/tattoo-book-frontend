import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Image, Modal } from "antd";
import { useState } from "react";
import { TattooGateway } from "../../../../infra/tattoos/tattoo.gateway";
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

  const like = async (id: number) => {
    TattooGateway.like(id);
    setLiked(true);
  };

  const unlike = async (id: number) => {
    TattooGateway.unLike(id);
    setLiked(false);
  };

  const renderHeartOutlined = () => {
    return (
      <HeartOutlined
        onClick={() => like(tattoo?.id!)}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-200 ease-in-out"
        style={{ fontFamily: "Poppins", fontSize: "18px" }}
      />
    );
  };

  const renderHeartFilled = () => {
    return (
      <HeartFilled
        onClick={() => unlike(tattoo?.id!)}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-300 ease-in-out"
        style={{ color: "red", fontFamily: "Poppins", fontSize: "18px" }}
      />
    );
  };

  return (
    <Modal title={tattoo?.title} centered open={showModal} footer={[]} onCancel={() => close()}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Image src={tattoo?.imageLink} style={{ maxHeight: "150px", maxWidth: "150px" }} />
          <div>
            <p>{tattoo?.description}</p>
            <p>{liked ? renderHeartFilled() : renderHeartOutlined()}</p>
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
