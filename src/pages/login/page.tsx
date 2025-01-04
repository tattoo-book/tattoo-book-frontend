import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthGateway } from "../../infra/gateways/AuthGateway";
import { LoginUI } from "./styles";

export interface ILoginCredentials {
    email: string;
    password: string;
}

export default function LoginPage() {
    const navigate = useNavigate();
    const onFinish = async (credentials: ILoginCredentials) => {
        const logged = await AuthGateway.login(credentials);
        if (logged) navigate("/home");
    };

    const rules = {
        username: {
            required: true,
            message: "Email é obrigatório",
        },
        password: {
            required: true,
            message: "Senha é obrigatoria",
        },
    };

    return (
        <LoginUI.Background>
            <LoginUI.FormContainer>
                <img
                    className="max-h-40"
                    src="https://static.wixstatic.com/media/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png/v1/fill/w_640,h_656,fp_0.49_0.41,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/64a834_b970259fd3ed4feeb549de6a89838cca~mv2.png"
                />
                <Form
                    className="bg-white"
                    name="login"
                    initialValues={{ remember: true }}
                    style={{ maxWidth: 360, width: "80%" }}
                    onFinish={onFinish}
                >
                    <Form.Item name="email" rules={[rules.username]}>
                        <Input
                            style={{ height: "60px" }}
                            prefix={<MailOutlined />}
                            placeholder="Digite seu email"
                        />
                    </Form.Item>
                    <Form.Item name="password" rules={[rules.password]}>
                        <Input
                            style={{ height: "60px" }}
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox>Lembre-se de mim</Checkbox>
                            </Form.Item>
                            <a href="">Recuperar senha</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            block
                            style={{ height: "60px" }}
                            type="primary"
                            htmlType="submit"
                        >
                            Entrar
                        </Button>
                        ou <a href="">Cadastre-se</a>
                    </Form.Item>
                </Form>
            </LoginUI.FormContainer>
        </LoginUI.Background>
    );
}
