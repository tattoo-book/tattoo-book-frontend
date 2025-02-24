import { IRegisterCredentials } from "../../pages/register/components/form/form.interfaces";
import { Gateway } from "../core/gateway/Gateway";

interface ILoginCredentials {
  email: string;
  password: string;
}

export class AuthGatewayImplemented {
  async register(credentials: IRegisterCredentials) {
    return await Gateway.request<{ data: any }>({
      method: "POST",
      data: credentials,
      url: "/users",
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }

  async login(credentials: ILoginCredentials) {
    return await Gateway.request<{ data: any }>({
      method: "POST",
      data: credentials,
      url: "/auth/sign-in",
    })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        return res.data;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}

export const AuthGateway = new AuthGatewayImplemented();
