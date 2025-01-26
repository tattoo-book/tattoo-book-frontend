import React, { ReactNode } from "react";
import { ButtonUI } from "./styles";

interface IButton {
  onClick?: () => void;
  style?: React.CSSProperties;
  children: ReactNode | string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

export function ButtonComponent(props: IButton) {
  return (
    <ButtonUI.Button className={props.className} style={props.style} onClick={props.onClick} type={props.type}>
      {props.children}
    </ButtonUI.Button>
  );
}
