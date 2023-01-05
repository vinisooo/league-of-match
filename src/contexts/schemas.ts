import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().required("Nome de usuário obrigatório").email("Email inválido"),
    password: yup.string().required("Senhaa obrigatória")
})