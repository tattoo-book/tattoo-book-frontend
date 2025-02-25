import { useMutation } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";

export function useUpdate() {
  const mutation = useMutation({
    mutationFn: async (tatooInfo: any) => {
      return TattooGateway.update(tatooInfo);
    },
    onSuccess: (data) => {
      console.log("Success on create tattoo");
    },
    onError: (error: any) => {
      console.log("ERROR: ", error);
    },
  });

  return mutation;
}
