import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ITattooCard } from "../most-populary.type";

export const TattooCard = (props: ITattooCard) => {
  const [liked, setLiked] = useState(true);

  return (
    <Card
      hoverable
      style={{
        width: 320,
        height: 500,
        backgroundColor: "#f2eeeb",
        borderRadius: "0.75rem",
        boxShadow: "2px 2px 15px #5e5e5e75",
        overflow: "hidden",
      }}
      cover={
        <div className="h-full w-full">
          <Image
            alt={`image-${props.index}`}
            style={{
              width: 320,
              height: 380,
              borderRadius: "0.75rem 0.75rem 0rem 0rem",
            }}
            src={props.card.imageLink}
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-between">
          <h2 className="font-semibold" style={{ fontSize: "22px", whiteSpace: "nowrap" }}>
            {`${props.card.title}`}
          </h2>
          {liked ? (
            <HeartFilled
              onClick={() => setLiked(false)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration- heartbeat 0.6s infinite ease-in-out"
              style={{ color: "red", fontFamily: "Poppins", fontSize: "22px" }}
            />
          ) : (
            <HeartOutlined
              onClick={() => setLiked(true)}
              className="hover:animate-pulse hover:scale-110 transition-transform duration-300 heartbeat 0.6s infinite ease-in-out"
              style={{ fontFamily: "Poppins", fontSize: "22px" }}
            />
          )}
        </div>
        <div className="flex justify-between items-baseline">
          <p
            className="size-4 whitespace-nowrap text-ellipsis overflow-hidden"
            style={{ fontFamily: "Poppins", width: "70%" }}
          >
            {`${props.card.description}`}
          </p>
          <Link to={`/profiles/tattoo-artist/${props.card.tattooArtistId}`}> ver tatuador</Link>
        </div>
      </div>
    </Card>
  );
};
