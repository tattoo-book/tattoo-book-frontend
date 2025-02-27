import { useQuery } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";
import { ParamsDTO } from "../../infra/tattoos/tattoo.type";

export function useListTattoosWithLikes(tattooArtistId: string, params?: ParamsDTO) {
  return useQuery({
    queryKey: ["tattoos"],
    queryFn: async () => {
      const tattoos = await TattooGateway.listWithLikes(tattooArtistId);
      return [...tattoos];
    },
  });
}
