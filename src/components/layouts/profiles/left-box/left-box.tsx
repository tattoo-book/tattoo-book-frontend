import { ILeftBox } from "../layout.interfaces";
import { ProfileLayoutUI } from "../styles";

export const LeftBox = (props: ILeftBox) => {
  return (
    <ProfileLayoutUI.Container style={{ width: "20%", flexDirection: "column", alignItems: "center", gap: "50px" }}>
      {props.children}
    </ProfileLayoutUI.Container>
  );
};
