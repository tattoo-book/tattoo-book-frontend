import { useQuery } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";

export function useListTattoos() {
  return useQuery({
    queryKey: ["tattoos"],
    queryFn: async () => {
      return await TattooGateway.list();
    },
  });
}
