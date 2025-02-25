import { TattooArtist } from "../tattoo-artist/tattoo-artist.type";

export type User = {
  id: number;
  name: string;
  email: string;
  tattooArtist: TattooArtist;
  tattoos?: any[];
};
