import { HeartOutlined } from "@ant-design/icons";

interface IUnLikedIcon {
  onClick: () => void;
}

export function UnLikedIcon(props: IUnLikedIcon) {
  return (
    <HeartOutlined
      onClick={props.onClick}
      className="hover:animate-pulse hover:scale-125 transition-transform duration-200 ease-in-out"
      style={{ fontFamily: "Poppins", fontSize: "18px" }}
    />
  );
}
