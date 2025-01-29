import { ITattoo } from "../../../../infra/gateways/tattoos/tattoo.interface";

export interface ITattooCard {
  index: number;
  card: ITattoo;
}
