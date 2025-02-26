import { Gateway } from "../core/gateway/Gateway";
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
    }).then((res: any) => res.data);
  }

  async like(tattooId: number) {
    return await Gateway.request<Data<any>>({
      method: "POST",
      url: `/tattoos/${tattooId}/like`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res: any) => res.data);
  }

  async create(tattoInfo: any) {
    return await Gateway.request<Data<any>>({
      method: "POST",
      url: `/tattoos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: tattoInfo,
    }).then((res: any) => res.data);
  }

  async update(tattoInfo: any) {
    return await Gateway.request<Data<any>>({
      method: "PATCH",
      url: `/tattoos/${tattoInfo.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: tattoInfo,
    }).then((res: any) => res.data);
  }

  async delete(id: any) {
    return await Gateway.request<Data<any>>({
      method: "DELETE",
      url: `/tattoos/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res: any) => res.data);
  }

  async unLike(tattooId: number) {
    return await Gateway.request<Data<any>>({
      method: "DELETE",
      url: `/tattoos/${tattooId}/unlike`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res: any) => res.data);
  }
}

export const TattooGateway = new TattooGatewayImplement();
