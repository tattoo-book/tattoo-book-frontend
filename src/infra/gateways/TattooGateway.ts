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
    return await Gateway.request<Data<ITatttoo>>({
      method: "GET",
      url: "/tattoos",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}

export const TattooGateway = new TattooGatewayImplement();
