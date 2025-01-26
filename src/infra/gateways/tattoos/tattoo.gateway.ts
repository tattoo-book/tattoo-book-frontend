import { Gateway } from "../Gateway";
import { Data, ITattoo } from "./tattoo.interface";
import { ParamsDTO } from "./tattoo.type";

class TattooGatewayImplement {
  async list(params?: ParamsDTO): Promise<ITattoo[]> {
    return await Gateway.request<Data<ITattoo[]>>({
      method: "GET",
      url: "/tattoos",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      params: { ...params },
    })
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}

export const TattooGateway = new TattooGatewayImplement();
