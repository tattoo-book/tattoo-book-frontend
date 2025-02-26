import { Gateway } from "../../core/gateway/Gateway";
import { Data } from "../../tattoos/tattoo.interface";
import { TattooArtist } from "../tattoo-artist.type";
import { TattooArtistGatewayProps } from "./tattoo-artist.type";

class TattooArtistGatewayClass {
  async findOne({ id }: TattooArtistGatewayProps): Promise<TattooArtist> {
    return await Gateway.request<Data<TattooArtist>>({
      method: "GET",
      url: `/tattoo-artists/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err: any) => {
        console.error("ERROR: ", err);
        throw err;
      });
  }
}
export const TattooArtistGateway = new TattooArtistGatewayClass();
