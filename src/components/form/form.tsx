import { Form } from "antd";
import { Store } from "antd/es/form/interface";
import { ReactNode } from "react";

interface IFormComponentUI {
  onFinish: (values: any) => void;
  className?: string | undefined;
  children: ReactNode;
  name?: string;
  style?: React.CSSProperties;
  initialValues: Store | undefined;
}

export function FormComponentUI(props: IFormComponentUI) {
  return (
    <Form
      className={props.className}
      name={props.name}
      initialValues={props.initialValues}
      style={props.style}
      onFinish={props.onFinish}
    >
      {props.children}
    </Form>
  );
}
