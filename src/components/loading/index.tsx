import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin indicator={<LoadingOutlined spin />} size="large" style={{ color: "#734930" }} />
    </div>
  );
}
