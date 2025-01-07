import { Gateway } from "./Gateway";

export interface ITatttoo {
    id: number;
    tattooArtistId: number;
    imageName: string;
    imageExtension: string;
    image: Buffer;
    imageBase64: string;
}

interface Data<T> {
    status: number;
    message: string;
    data: T;
}

class TattooGatewayImplement {
    async listAll(): Promise<ITatttoo[] | null> {
        try {
            const response = await Gateway.request<Data<ITatttoo>>({
                method: "GET",
                url: "/tattoos",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data;
        } catch (error) {
            console.log("ERROR: ", error);
            return null;
        }
    }
}

export const TattooGateway = new TattooGatewayImplement();
