import { useMutation } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";

export function useCreateTattoo() {
  const mutation = useMutation({
    mutationFn: async (tatooInfo: any) => {
      return TattooGateway.create(tatooInfo);
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
