import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória")
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "Pelo menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "Pelo menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "Pelo menos um dígito")
    .min(8, "Pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha"),
  nickname: yup.string().required("Nome de usuário obrigatório"),
  elo: yup
    .string()
    .required("Campo obrigatório")
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
      "Elo obrigatório"
    ),
  route: yup
    .string()
    .required("Campo obrigátório")
    .oneOf(
      ["toplane", "midlane", "adc", "jungle", "suport"],
      "Rota obrigatória"
    )
});
