import * as yup from "yup";

export type FormValues = {
    email: string;
    password: string;
};

export type FormValues2 = {
    name: string;
    email: string;
    password: string;
    password2: string;
};

export interface iContextProps {
    children: React.ReactNode;
}

export interface iUserResponse {
    email: string;
    id: number;
    name: string;
}

export interface iUser {
    accessToken: string;
    user: iUserResponse;
}

export interface iList {
    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
}

export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
});

export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),

    password: yup.string().required("Senha obrigatória"),

    password2: yup
        .string()
        .required("Confirmar sua senha é obrigatório")
        .oneOf([yup.ref("password")], "Senhas diferentes"),
});


