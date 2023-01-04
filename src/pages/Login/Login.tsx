import { Form } from "components/Form/Form";
import { FormBG } from "components/FormBG/FormBG";
import { LoginPage } from "./StyledLogin";
import { InputBox } from "components/InputBox/InputBox";

import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";

export function Login () {
    return (
        <LoginPage>
            <FormBG imageBG="login"/>
            <Form formTitle="Login">
                <InputBox label="name"/>
                <InputBox label="teste"/>
                <InputBox label="teste2"/>
            <footer>
                <DefaultLink to="/register" size="49%">Criar conta</DefaultLink>
                <DefaultBtn green size="49%">Entrar</DefaultBtn>
            </footer>
            </Form>
        </LoginPage>
    )
}