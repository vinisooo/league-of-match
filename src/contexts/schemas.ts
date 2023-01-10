import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória")
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório para cadastro")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória para cadastro")
    .matches(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um dígito")
    .min(8, "Pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória para cadastro"),
  nickname: yup.string().required("Nome de usuário obrigatório para cadastro"),
  elo: yup
    .string()
    .required("Elo obrigatório para cadastro")
    .oneOf(
      [
        "ferro",
        "bronze",
        "prata",
        "ouro",
        "platina",
        "diamante",
        "mestre",
        "grão-mestre",
        "desafiante"
      ],
      "Elo obrigatório para cadastro"
    ),
  route: yup
    .string()
    .required("Rota obrigatória para cadastro")
    .oneOf(
      ["toplane", "midlane", "adc", "jungle", "suport"],
      "Rota obrigatória para cadastro"
    )
});
