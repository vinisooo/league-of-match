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
          <div>
            <select {...register("elo")}>
              <option >Selecione seu elo</option>
              <option value={"ferro"}>Ferro</option>
              <option value={"bronze"}>Bronze</option>
              <option value={"prata"}>Prata</option>
              <option value={"ouro"}>Ouro</option>
              <option value={"platina"}>Platina</option>
              <option value={"diamante"}>Diamante</option>
              <option value={"mestre"}>Mestre</option>
              <option value={"grão-mestre"}>Grão-Mestre</option>
              <option value={"desafiante"}>Desafiante</option>
            </select>
            {errors.elo && <span>{errors.elo.message}</span>}
          </div>
          <div>
            <select {...register("route")}>
              <option>Selecione sua rota</option>
              <option value={"toplane"}>Topo</option>
              <option value={"jungle"}>Selva</option>
              <option value={"midlane"}>Meio</option>
              <option value={"adc"}>Atirador</option>
              <option value={"suport"}>Suporte</option>
            </select>
            {errors.route && <span>{errors.route.message}</span>}
          </div>
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
