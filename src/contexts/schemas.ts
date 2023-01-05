import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Nome de usuário obrigatório")
    .email("Email inválido"),
  password: yup.string().required("Senhaa obrigatória"),
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório para cadastro")
    .email("Email inválido"),
  password: yup.string().required("Senha obrigatória para cadastro"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória para cadastro"),
  nickname: yup.string().required("Nome de usuário obrigatório para cadastro"),
  elo: yup.string().required("Elo obrigatório para cadastro"),
  route: yup.string().required("Rota obrigatória para cadastro"),
});
