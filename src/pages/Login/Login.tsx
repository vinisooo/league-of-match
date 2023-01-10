import { Form } from "components/Form/Form";
import { FormBG } from "components/FormImageBG/FormImageBG";
import { LoginPage } from "./StyledLogin";
import { InputBox } from "components/InputBox/InputBox";
import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { useForm } from "react-hook-form";
import { iUserLogin } from "contexts/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "contexts/schemas";
import React, { useContext } from "react";
import { UserContext } from "contexts/UserContext";

import "animate.css"

export function Login () {
    const { login } = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm<iUserLogin>({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema)
    });
    return (
        <LoginPage className="animate__animated animate__fadeIn">
            <FormBG imageBG="login"/>
            <Form formTitle="Login" callback={handleSubmit(login)}>
                <InputBox type="email" errors={errors.email?.message} label="email" register={register("email")} />
                <InputBox type="password" errors={errors.password?.message} label="senha" register={register("password")}/>
                <div>
                    <DefaultLink to="/register" size="49%">Criar conta</DefaultLink>
                    <DefaultBtn type="submit" green size="49%">Entrar</DefaultBtn>
                </div>
            </Form>
        </LoginPage>
    )
}
