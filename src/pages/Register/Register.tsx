import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "contexts/schemas";
import { UserContext } from "contexts/UserContext";
import React, { useContext } from "react";
import {
  StyledSelect,
  RegisterPage
} from "./StyledRegister";
import { useForm } from "react-hook-form";
import { iUserRegister } from "contexts/interfaces";
import { Form } from "components/Form/Form";
import { InputBox } from "components/InputBox/InputBox";
import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { FormBG } from "components/FormImageBG/FormImageBG";

export function Register () {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<iUserRegister>({
    resolver: yupResolver(RegisterSchema)
  });


  const onSubmit = (data:iUserRegister) => registerUser(data);

  return (
    <RegisterPage className="animate__animated animate__fadeIn">
      <Form formTitle="Cadastrar" left callback={handleSubmit(onSubmit)}>
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
          errors={errors.username?.message}
          label="Nome de usuário"
          register={register("username")}
        />
        <StyledSelect>
          <fieldset>
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
            </select>
            {errors.elo && <span>{errors.elo.message}</span>}
          </fieldset>
          <fieldset>
            <select {...register("route")}>
              <option>Selecione sua rota</option>
              <option value={"Toplane"}>Topo</option>
              <option value={"Jungle"}>Selva</option>
              <option value={"Midlane"}>Meio</option>
              <option value={"Adc"}>Atirador</option>
              <option value={"Support"}>Suporte</option>
            </select>
            {errors.route && <span>{errors.route.message}</span>}
          </fieldset>
        </StyledSelect>
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
