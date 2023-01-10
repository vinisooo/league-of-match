import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "contexts/schemas";
import { UserContext } from "contexts/UserContext";
import React, { useContext } from "react";
import {
  DivSelect,
  RegisterPage
} from "./StyledRegister";
import { useForm } from "react-hook-form";
import { iUserRegister } from "contexts/interfaces";
import { Form } from "components/Form/Form";
import { InputBox } from "components/InputBox/InputBox";
import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { FormBG } from "components/FormBG/FormBG";

export function Register () {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<iUserRegister>({
    resolver: yupResolver(RegisterSchema)
  });
  const onSubmit = handleSubmit(registerUser);
  return (
    <RegisterPage className="animate__animated animate__fadeIn">
      <Form formTitle="Cadastrar" left callback={onSubmit}>
        <InputBox
          errors={errors.email?.message}
          label="Email"
          register={register("email")}
        />
        <InputBox
          errors={errors.password?.message}
          label="Senha"
          type="password"
          register={register("password")}
        />
        <InputBox
          errors={errors.confirmPassword?.message}
          label="Confimar Senha"
          type="password"
          register={register("confirmPassword")}
        />
        <InputBox
          errors={errors.nickname?.message}
          label="Nome de usuário"
          register={register("nickname")}
        />
        <DivSelect>
          <select {...register("elo")}>
            <option >Selecione seu elo</option>
            <option value={"Ferro"}>Ferro</option>
            <option value={"Bronze"}>Bronze</option>
            <option value={"Prata"}>Prata</option>
            <option value={"Ouro"}>Ouro</option>
            <option value={"Platina"}>Platina</option>
            <option value={"Diamante"}>Diamante</option>
            <option value={"Mestre"}>Mestre</option>
            <option value={"Grão-Mestre"}>Grão-Mestre</option>
            <option value={"Desafiante"}>Desafiante</option>
          </select >
          <select {...register("route")}>
            <option>Sua rota preferida</option>
            <option value={"TopLane"}>TopLane</option>
            <option value={"MidLane"}>MidLane</option>
            <option value={"Adc"}>Adc</option>
            <option value={"Jungle"}>Jungle</option>
            <option value={"Suporte"}>Suporte</option>
          </select>
        </DivSelect>
        <div>
          <DefaultLink to="/login" size="49%">
            Ja tenho conta
          </DefaultLink>
          <DefaultBtn type="submit" green size="49%">
            Registrar
          </DefaultBtn>
        </div>
      </Form>
      <FormBG imageBG="register" />
    </RegisterPage>
  );
}
