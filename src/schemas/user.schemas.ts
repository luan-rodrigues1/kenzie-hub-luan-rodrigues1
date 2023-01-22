import * as yup from "yup";

export const formRegistrationSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(8, "Mínimo  de 8 caracteres")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "deve conter ao menos um caracter especial"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "confirmação de senha deve ser igual a senha"
      ),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
});

export const formLoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatório"),
});
