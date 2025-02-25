import { useMutation } from "@tanstack/react-query";
import { TattooGateway } from "../../infra/tattoos/tattoo.gateway";

interface IUnLike {
  tattooId: number;
}

export function useUnLike(params: IUnLike) {
  const mutation = useMutation({
    mutationFn: async () => {
      return TattooGateway.unLike(params.tattooId);
    },
    onSuccess: (data) => {},
    onError: (err) => {
      console.log(err);
    },
  });
  return mutation;
}
