import { Form } from "components/Form/Form";
import { FormBG } from "components/FormBG/FormBG";
import { LoginPage } from "./StyledLogin";
import { InputBox } from "components/InputBox/InputBox";

import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";

import { useForm } from "react-hook-form";
import { iUserLogin } from "contexts/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "contexts/schemas";

export function Login () {

    const { register, handleSubmit, formState: { errors } } = useForm<iUserLogin>({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema)
    });

    function sendData(data: object){
        console.log(data)
    }

    return (
        <LoginPage>
            <FormBG imageBG="login"/>
            <Form formTitle="Login" callback={handleSubmit(sendData)}>
                <InputBox errors={errors.email?.message} label="email" register={register("email")} />
                <InputBox errors={errors.password?.message} label="senha" register={register("password")}/>
                <footer>
                    <DefaultLink to="/register" size="49%">Criar conta</DefaultLink>
                    <DefaultBtn type="submit" green size="49%">Entrar</DefaultBtn>
                </footer>
            </Form>
        </LoginPage>
    )
}