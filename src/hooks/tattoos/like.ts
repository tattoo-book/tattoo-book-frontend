import { useMutation } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";

interface ILike {
  tattooId: number;
}

export function useLike(params: ILike) {
  const mutation = useMutation({
    mutationFn: async () => {
      return TattooGateway.like(params.tattooId);
    },
    onSuccess: (data) => {},
    onError: (err) => {
      console.log(err);
    },
  });
  return mutation;
}
