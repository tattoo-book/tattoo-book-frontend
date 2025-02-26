import { Gateway } from "../core/gateway/Gateway";
import { Data } from "../tattoos/tattoo.interface";
import { User } from "./user.type";
import { InfoMe } from "./users.interface";

class UserGatewayInfra {
  async getInfoMe(): Promise<User> {
    return await Gateway.request<Data<InfoMe>>({
      method: "GET",
      url: "/users/me",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res: any) => {
        console.log(`[UserGatewayInfra] Success on get user info`);
        return res.data;
      })
      .catch((err: any) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}

export const UserGateway = new UserGatewayInfra();
