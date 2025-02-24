import { TattooGateway } from "./tattoo.gateway";

export class TattooActions {
  constructor() {}

  public static like(tattooId: number) {
    TattooGateway.like(tattooId);
  }

  public static unlike(tattooId: number) {
    TattooGateway.unLike(tattooId);
  }
}
