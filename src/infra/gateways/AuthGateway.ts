import { Gateway } from "./Gateway";

interface ILoginCredentials {
    email: string;
    password: string;
}
export class AuthGatewayImplemented {
    async login(credentials: ILoginCredentials) {
        try {
            const response = await Gateway.request({
                method: "POST",
                data: credentials,
                url: "/auth/sign-in",
            });
            localStorage.setItem("token", response.data.accessToken);
            return response.data;
        } catch (error) {
            console.error("ERROR: ", error);
            return null;
        }
    }
}

export const AuthGateway = new AuthGatewayImplemented();
