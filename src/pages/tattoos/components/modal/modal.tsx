import { Image, Modal } from "antd";
import { TattooModalUI } from "./styles";

export interface ITattooInfo {
    title: string;
    description: string;
    image: string;
}

export interface ITattooCard {
    close: () => void;
    showModal: boolean;
    card: ITattooInfo | null;
}

export const TattooModal = (props: ITattooCard) => {
    return (
        <Modal
            title={props.card?.title}
            centered
            open={props.showModal}
            footer={[]}
            onCancel={() => props.close()}
        >
            <Image
                src={props.card?.image}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
            />
            <TattooModalUI.Modal.Footer></TattooModalUI.Modal.Footer>
        </Modal>
    );
};
