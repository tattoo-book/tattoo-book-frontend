import { IRigthBox } from "../layout.interfaces";
import { ProfileLayoutUI } from "../styles";

export const RigthBox = (props: IRigthBox) => {
  return <ProfileLayoutUI.Container style={{ maxWidth: "80%" }}>{props.children}</ProfileLayoutUI.Container>;
};
