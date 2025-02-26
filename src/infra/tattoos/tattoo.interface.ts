import { TattooArtist } from "../tattoo-artist/tattoo-artist.type";

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
  liked?: boolean;
  tattooArtist: TattooArtist;
}

export interface Data<T> {
  status: number;
  message: string;
  data: T;
}
