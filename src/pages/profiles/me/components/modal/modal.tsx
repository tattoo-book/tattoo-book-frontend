import { LinkOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { FormUI } from "../../../../../components/form";
import { RegisterTattooModalUI } from "./styles";

export interface IModalRegisterTattoo {
  close: () => void;
  showModal: boolean;
}

export const ModalRegisterTattoo = (props: IModalRegisterTattoo) => {
  const { close, showModal } = props;

  const onFinish = (tattooInfo: any) => {
    console.log(tattooInfo);
    //  mutate(credentials);
  };

  return (
    <Modal title={"Cadastrar tatuagem"} centered open={showModal} footer={[]} onCancel={() => close()}>
      <FormUI.Form className="bg-white" name="login" initialValues={{}} style={{ width: "100%" }} onFinish={onFinish}>
        <FormUI.Item name="link" rules={[]}>
          <FormUI.Input
            style={{ height: "60px", width: "100%" }}
            prefix={<LinkOutlined />}
            placeholder="Link da imagem"
          />
        </FormUI.Item>

        <FormUI.Item name="link" rules={[]}>
          <FormUI.Input
            style={{ height: "60px", width: "100%" }}
            prefix={<LinkOutlined />}
            placeholder="Link da imagem"
          />
        </FormUI.Item>

        <FormUI.Item name="link" rules={[]}>
          <FormUI.Input
            style={{ height: "60px", width: "100%" }}
            prefix={<LinkOutlined />}
            placeholder="Link da imagem"
          />
        </FormUI.Item>
      </FormUI.Form>
      <RegisterTattooModalUI.Modal.Footer></RegisterTattooModalUI.Modal.Footer>
    </Modal>
  );
};
