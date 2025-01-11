import { ButtonUI } from "./styles";

interface IButton {
  content: string;
  onClick: () => void;
}

export default function Button(props: IButton) {
  const { content, onClick } = props;
  return <ButtonUI.Button onClick={onClick}>{content}</ButtonUI.Button>;
}
