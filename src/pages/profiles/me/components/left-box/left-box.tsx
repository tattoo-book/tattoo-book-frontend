import { User } from "../../../../../types/user.type";
import { TattooArtistProfileComponentsUI } from "../styles";

const { Container } = TattooArtistProfileComponentsUI;

export interface ILeftBox {
  profileInfo: User | null;
}

export const LeftBox = (props: ILeftBox) => {
  const { profileInfo } = props;
  console.log("PROFILE: ", profileInfo);
  return (
    <div style={{ background: "#8d8d8d", height: "150px", width: "150px", borderRadius: "50%", overflow: "hidden" }}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="profile-img"
        style={{ height: "150px", width: "150px" }}
      />
    </div>
  );
};
