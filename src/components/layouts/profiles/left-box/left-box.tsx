import { ILeftBox } from "../layout.interfaces";
import { ProfileLayoutUI } from "../styles";

export const LeftBox = (props: ILeftBox) => {
  return (
    <ProfileLayoutUI.Container
      style={{ maxWidth: "20%", flexDirection: "column", alignItems: "center", gap: "50px", minWidth: "280px" }}
    >
      {props.children}
    </ProfileLayoutUI.Container>
  );
};
