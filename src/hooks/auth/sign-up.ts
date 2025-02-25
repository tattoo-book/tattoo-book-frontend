import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthGateway } from "../../infra/auth/auth.gateway";
import { IRegisterCredentials } from "../../pages/register/components/form/form.interfaces";

export function useRegister() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (credentials: IRegisterCredentials) => {
      return AuthGateway.register(credentials);
    },
    onSuccess: (data) => {
      if (data) {
        navigate("/login");
      } else {
        console.log("Register failed: Invalid credentials");
      }
    },
    onError: (error: any) => {
      const description = error.response.data.description;
      notification.open({
        type: "error",
        message: "Falhar ao cadastrar usuário",
        description: description ?? "Credenciais incorretas.",
        duration: 5,
        placement: "bottomRight",
      });
    },
  });

  return mutation;
}
