import React, { ReactNode } from "react";
import { ButtonUI } from "./styles";

interface IButton {
  onClick?: () => void;
  style?: React.CSSProperties;
  children: ReactNode | string;
  block?: boolean | undefined;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  htmlType?: "button" | "submit" | "reset" | undefined;
}

export function ButtonComponent(props: IButton) {
  return (
    <ButtonUI.Button style={props.style} onClick={props.onClick}>
      {props.children}
    </ButtonUI.Button>
  );
}
