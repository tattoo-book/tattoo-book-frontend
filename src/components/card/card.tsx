import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { useState } from "react";

export interface ICard {
  index: number;
  content: {
    title: string;
    description: string;
    imageLink: string;
    tattooArtistId: number;
  };
  style?: React.CSSProperties;
}

export function TattooCard(props: ICard) {
  const [liked, setLiked] = useState(true);

  const renderHeartOutlined = () => {
    return (
      <HeartOutlined
        onClick={() => setLiked(true)}
        className="hover:animate-pulse hover:scale-110 transition-transform duration-300 heartbeat 0.6s infinite ease-in-out"
        style={{ fontFamily: "Poppins", fontSize: "16px" }}
      />
    );
  };
  const renderHeartFilled = () => {
    return (
      <HeartFilled
        onClick={() => setLiked(false)}
        className="hover:animate-pulse hover:scale-110 transition-transform duration- heartbeat 0.6s infinite ease-in-out"
        style={{ color: "red", fontFamily: "Poppins", fontSize: "16px" }}
      />
    );
  };
  const defaultStyles: React.CSSProperties = {
    backgroundColor: "#f2eeeb",
    borderRadius: "0.75rem",
    boxShadow: "2px 2px 15px #5e5e5e75",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={{ ...defaultStyles, ...props.style }}>
      <div style={{ width: "100%", height: "75%", overflow: "hidden", borderRadius: "0.75rem 0.75rem 0rem 0rem" }}>
        <Image style={{ objectFit: "fill" }} alt={`image-${props.index}`} src={props.content.imageLink} />
      </div>
      <div
        style={{ background: "#fff", height: "25%", padding: "10px 20px", borderRadius: "0rem 0rem 0.75rem 0.75rem " }}
      >
        <div className="flex justify-between">
          <h2 style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "bold" }}>{props.content.title}</h2>
          {liked ? renderHeartFilled() : renderHeartOutlined()}
        </div>
        <p style={{ fontFamily: "Poppins", fontSize: "14px" }}>{props.content.description}</p>
      </div>
    </div>
  );
}
