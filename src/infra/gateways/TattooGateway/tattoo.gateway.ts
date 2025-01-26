import { Gateway } from "../Gateway";

export interface ITattoo {
  id: number;
  title: string;
  description: string;
  tattooArtistId: number;
  imageName: string;
  imageExtension: string;
  image: Buffer;
  imageBase64: string;
  imageLink: string;
}

interface Data<T> {
  status: number;
  message: string;
  data: T;
}

class TattooGatewayImplement {
  async list(): Promise<ITattoo[]> {
    return await Gateway.request<Data<ITattoo[]>>({
      method: "GET",
      url: "/tattoos",
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
