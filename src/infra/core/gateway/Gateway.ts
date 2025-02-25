import axios, { AxiosRequestConfig } from "axios";

class GatewayDefault {
  static baseURL = import.meta.env.VITE_API_GATEWAY;
  async request<T>(config: AxiosRequestConfig) {
    config.baseURL = config.baseURL ? config.baseURL : GatewayDefault.baseURL;
    return await axios
      .request<T>(config)
      .then((res) => res.data)
      .catch((err: any) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}

export const Gateway = new GatewayDefault();
