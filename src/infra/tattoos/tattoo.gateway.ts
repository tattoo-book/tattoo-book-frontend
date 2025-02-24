import { Gateway } from "../architecture/gateway/Gateway";
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

  async listWithLikes(tattooArtistId: string, params?: ParamsDTO): Promise<ITattoo[]> {
    return await Gateway.request<Data<ITattoo[]>>({
      method: "GET",
      url: `/tattoos/${tattooArtistId}/likeds`,
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

  async like(tattooId: number) {
    return await Gateway.request<Data<any>>({
      method: "POST",
      url: `/tattoos/${tattooId}/like`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }

  async unLike(tattooId: number) {
    return await Gateway.request<Data<any>>({
      method: "DELETE",
      url: `/tattoos/${tattooId}/unlike`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
