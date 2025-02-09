import { useQuery } from "@tanstack/react-query";
import { UserGateway } from "../../infra/users/users.gateway";

export function useGetInfoMe() {
  return useQuery({
    queryKey: ["infoMe"],
    queryFn: async () => {
      return await UserGateway.getInfoMe();
    },
  });
}
