import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Api } from "../Services/mainApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    FormValues,
    FormValues2,
    iUser,
    iContextProps,
} from "../Components/Types&Intefaces";

interface iUserContext {
    onSubmitLogin: (data: FormValues) => void;
    onSubmitRegister: (data: FormValues2) => void;
    LogOut: () => void;
    user: iUser | null;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iContextProps) => {
    const [user, setUser] = useState({} as iUser | null);
    const navigate = useNavigate();

    const onSubmitLogin: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await Api.post("/login", data);

            setUser(response.data);

            localStorage.setItem(
                "@burgerKenzie:token",
                response.data.accessToken
            );

            toast.success("Usuario Logado");

            setTimeout(() => navigate("/dashboard"), 3000);
        } catch (error) {
            console.log(error);
            toast.error("Ops... algo deu errado");
        }
    };

    const onSubmitRegister: SubmitHandler<FormValues2> = async (data) => {
        try {
            const response = await Api.post("/users", {
                email: data.email,
                password: data.password,
                name: data.name,
            });

            setUser(response.data);

            localStorage.setItem(
                "@burgerKenzie:token",
                response.data.accessToken
            );

            toast.success("Usuario criado e logado");

            setTimeout(() => navigate("/dashboard"), 3000);
        } catch (error) {
            console.log(error);
            toast.error("Ops... algo deu errado");
        }
    };

    const LogOut = () => {
        localStorage.removeItem("@burgerKenzie:token");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ onSubmitLogin, onSubmitRegister, LogOut, user }}
        >
            {children}
        </UserContext.Provider>
    );
};
