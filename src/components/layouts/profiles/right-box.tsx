import { ReactNode } from "react";
import { ProfileLayoutUI } from "./styles";

interface IRigthBox {
  children: ReactNode;
}

export const RigthBox = (props: IRigthBox) => {
  return <ProfileLayoutUI.Container style={{ width: "80%" }}>{props.children}</ProfileLayoutUI.Container>;
};
