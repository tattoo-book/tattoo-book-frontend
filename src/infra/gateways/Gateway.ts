import axios, { AxiosRequestConfig } from "axios";

class GatewayDefault {
    static baseURL = import.meta.env.VITE_API_GATEWAY;
    async request(config: AxiosRequestConfig) {
        if (!config.baseURL) {
            config.baseURL = GatewayDefault.baseURL;
        }

        return await axios.request(config).then((res) => res.data);
    }
}

export const Gateway = new GatewayDefault();
