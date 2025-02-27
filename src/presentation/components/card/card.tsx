import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useState } from "react";
import { CardUI } from "./styles";

export interface ICard {
  index: number;
  content: {
    id: number;
    title: string;
    description: string;
    imageLink: string;
    tattooArtistId: number;
  };
  like?: () => void;
  unlike?: () => void;
  style?: React.CSSProperties;
}

export function TattooCard(props: ICard) {
  const [liked, setLiked] = useState(true);

  const like = () => {
    const likeBody = {
      id: props.content.id,
      tattooArtistID: props.content.tattooArtistId,
    };
    setLiked(true);
  };

  const unlike = () => {
    const unlikeBody = {
      id: props.content.id,
      tattooArtistID: props.content.tattooArtistId,
    };
    setLiked(false);
  };
  const renderHeartOutlined = () => {
    return (
      <HeartOutlined
        onClick={() => like()}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-200 ease-in-out"
        style={{ fontFamily: "Poppins", fontSize: "18px" }}
      />
    );
  };

  const renderHeartFilled = () => {
    return (
      <HeartFilled
        onClick={() => unlike()}
        className="hover:animate-pulse hover:scale-125 transition-transform duration-300 ease-in-out"
        style={{ color: "red", fontFamily: "Poppins", fontSize: "18px" }}
      />
    );
  };

  return (
    <CardUI.Container style={{ ...props.style }}>
      <div
        style={{
          width: "100%",
          height: "75%",
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: "0.75rem 0.75rem 0rem 0rem",
        }}
      >
        <Image style={{ objectFit: "cover" }} alt={`image-${props.index}`} src={props.content.imageLink} />
      </div>
      <div
        style={{ background: "#fff", height: "25%", padding: "10px 20px", borderRadius: "0rem 0rem 0.75rem 0.75rem " }}
      >
        <div className="flex justify-between">
          <h2
            style={{
              fontSize: "18px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              maxWidth: "80%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {props.content.title}
          </h2>
          {liked ? renderHeartFilled() : renderHeartOutlined()}
        </div>
        <p
          style={{
            fontFamily: "Poppins",
            fontSize: "14px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            whiteSpace: "nowrap",
          }}
        >
          {props.content.description}
        </p>
      </div>
    </CardUI.Container>
  );
}
