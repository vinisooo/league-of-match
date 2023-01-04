import { Form } from "components/Form/Form";
import { FormBG } from "components/FormBG/FormBG";
import { LoginPage } from "./StyledLogin";
import { InputBox } from "components/InputBox/InputBox";

export function Login () {
    return (
        <LoginPage>
            <FormBG imageBG="login"/>
            <Form formTitle="Login">
                <InputBox label="name"/>

            </Form>
        </LoginPage>
    )
}