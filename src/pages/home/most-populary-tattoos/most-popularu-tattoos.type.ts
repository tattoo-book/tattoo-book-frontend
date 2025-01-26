import { ITattoo } from "../../../infra/gateways/TattooGateway/tattoo.interface";

export interface ITattooCard {
  index: number;
  card: ITattoo;
}
