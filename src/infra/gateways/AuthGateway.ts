import { Gateway } from "./Gateway";

interface ILoginCredentials {
  email: string;
  password: string;
}

export class AuthGatewayImplemented {
  async login(credentials: ILoginCredentials) {
    return await Gateway.request({
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
