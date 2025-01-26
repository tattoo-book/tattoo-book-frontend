import { Button } from "antd";
import React, { ReactNode } from "react";

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
    <Button
      block={props.block}
      style={props.style}
      type={props.type || "default"}
      htmlType={props.htmlType || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
