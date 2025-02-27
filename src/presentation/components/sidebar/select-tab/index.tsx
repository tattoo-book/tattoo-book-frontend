import { LockOutlined } from "@ant-design/icons";

interface ISelectTab {
  blocked?: boolean;
  label: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function SelectTab(props: ISelectTab) {
  if (props.blocked)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "15px 15px",
          borderRadius: "6px",
          textTransform: "capitalize",
          ...props.style,
        }}
        onClick={props.onClick}
      >
        {props.label} <LockOutlined />
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "15px 15px",
        borderRadius: "6px",
        ...props.style,
      }}
      onClick={props.onClick}
      className={"hover:bg-gray-200"}
    >
      {props.label}
    </div>
  );
}
