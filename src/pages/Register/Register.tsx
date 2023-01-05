import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "contexts/schemas";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import {
  DivSelect,
  OptionRegister,
  RegisterPage,
  SelectRegister,
} from "./StyledRegister";
import { useForm } from "react-hook-form";
import { iUserRegister } from "contexts/interfaces";
import { Form } from "components/Form/Form";
import { InputBox } from "components/InputBox/InputBox";
import { DefaultBtn, DefaultLink } from "styles/DefaultBtn";
import { FormBG } from "components/FormBG/FormBG";

export function Register() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(RegisterSchema),
  });
  const onSubmit = handleSubmit(registerUser);
  console.log(errors);
  return (
    <RegisterPage>
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
          <SelectRegister {...register("elo")}>
            <OptionRegister>Selecione seu elo</OptionRegister>
            <OptionRegister>Ferro</OptionRegister>
            <OptionRegister>Bronze</OptionRegister>
            <OptionRegister>Prata</OptionRegister>
            <OptionRegister>Ouro</OptionRegister>
            <OptionRegister>Platina</OptionRegister>
            <OptionRegister>Diamante</OptionRegister>
            <OptionRegister>Mestre</OptionRegister>
            <OptionRegister>Grão-Mestre</OptionRegister>
            <OptionRegister>Desafiante</OptionRegister>
          </SelectRegister>
          <SelectRegister {...register("route")}>
            <OptionRegister>Sua rota preferida</OptionRegister>
            <OptionRegister>TopLane</OptionRegister>
            <OptionRegister>MidLane</OptionRegister>
            <OptionRegister>Adc</OptionRegister>
            <OptionRegister>Jungle</OptionRegister>
            <OptionRegister>Suporte</OptionRegister>
          </SelectRegister>
        </DivSelect>
        <footer>
          <DefaultLink to="/login" size="49%">
            Ja tenho conta
          </DefaultLink>
          <DefaultBtn type="submit" green size="49%">
            Registrar
          </DefaultBtn>
        </footer>
      </Form>
      <FormBG imageBG="register" />
    </RegisterPage>
  );
}
