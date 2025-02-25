import { LinkOutlined, LoadingOutlined } from "@ant-design/icons";
import { Modal, Spin } from "antd";
import { useUpdate } from "../../../../hooks/tattoos/update-tattoo.hook copy";
import { ITattoo } from "../../../../infra/tattoos/tattoo.interface";
import { ButtonComponent } from "../../../button/button";
import { FormUI } from "../../../form";
import { RegisterTattooModalUI } from "./styles";

export interface IModalUpdateTattoo {
  close: () => void;
  showModal: boolean;
  defaultValues: ITattoo;
}

export const ModalUpdateTattoo = (props: IModalUpdateTattoo) => {
  const { close, showModal } = props;

  const { mutate, isPending } = useUpdate();

  const onFinish = (tattooInfo: any) => {
    console.log(tattooInfo);
    mutate({
      id: props.defaultValues.id,
      imageLink: tattooInfo.link,
      title: tattooInfo.title,
      description: tattooInfo.description,
    });
    close();
  };

  return (
    <Modal title={"Atualizar tatuagem"} centered open={showModal} footer={[]} onCancel={() => close()}>
      <FormUI.Form
        className="bg-white"
        name="login"
        initialValues={{
          title: props.defaultValues.title,
          description: props.defaultValues.description,
          link: props.defaultValues.imageLink,
        }}
        style={{ width: "100%" }}
        onFinish={onFinish}
      >
        <FormUI.Item name="link" rules={[]}>
          <FormUI.Input
            style={{ height: "60px", width: "100%" }}
            prefix={<LinkOutlined />}
            placeholder="Link da imagem"
          />
        </FormUI.Item>

        <FormUI.Item name="title" rules={[]}>
          <FormUI.Input style={{ height: "60px", width: "100%" }} placeholder="Titulo da imagem" />
        </FormUI.Item>

        <FormUI.Item name="description" rules={[]}>
          <FormUI.Input style={{ height: "60px", width: "100%" }} placeholder="Descrição da imagem" />
        </FormUI.Item>

        <FormUI.Item>
          <ButtonComponent style={{ height: "60px", width: "100%" }} className="hover:border-2" type="submit">
            {isPending ? (
              <div className="w-full h-full flex justify-center items-center">
                <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: "#734930" }} />
              </div>
            ) : (
              "Salvar"
            )}
          </ButtonComponent>
        </FormUI.Item>
      </FormUI.Form>
      <RegisterTattooModalUI.Modal.Footer></RegisterTattooModalUI.Modal.Footer>
    </Modal>
  );
};
