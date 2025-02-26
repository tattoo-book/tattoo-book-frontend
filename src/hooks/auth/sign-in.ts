import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthGateway } from "../../infra/auth/auth.gateway";
import { ILoginCredentials } from "../../pages/login/components/form/form.interfaces";

export function useSignIn() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (credentials: ILoginCredentials) => {
      return AuthGateway.login(credentials);
    },
    onSuccess: (data) => {
      if (data) {
        navigate("/home");
      } else {
        console.log("Login failed: Invalid credentials");
      }
    },
    onError: (error: any) => {
      const description = error.response.data.description;
      notification.open({
        type: "error",
        message: "Falhar ao fazer login",
        description: description ?? "Credenciais incorretas.",
        duration: 5,
        placement: "bottomRight",
      });
    },
  });

  return mutation;
}
