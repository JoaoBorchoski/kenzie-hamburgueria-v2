import React from "react";
import { StyledDivLogin } from "./stylesLogin";

import { BsBagCheck } from "react-icons/bs";

import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { formSchemaLogin } from "../../Components/Types&Intefaces";

type FormValues = {
    email: string;
    password: string;
};

export const Login: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(formSchemaLogin),
        mode: "onBlur",
    });


    const { onSubmitLogin } = useContext(UserContext);

    return (
        <StyledDivLogin>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <h2>Login</h2>
                <section>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />
                    <span>{errors.email?.message}</span>
                </section>
                <section>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    <span>{errors.password?.message}</span>
                </section>
                <button type="submit">Logar</button>
                <p>
                    Crie sua conta para saborear muitas delícias e matar sua
                    fome!
                </p>
                <Link to={"/register"}>Cadastrar</Link>
            </form>
            <div>
                <h1>
                    Burger <span>Kenzie</span>
                </h1>
                <div>
                    <BsBagCheck size={40} color={"rgba(39, 174, 96)"} />
                    <p>
                        A vida é como um sanduíche, é preciso recheá-la com os
                        melhores ingredientes.
                    </p>
                </div>
                <img src="../../imgs/Group 135.svg" alt="" />
            </div>
        </StyledDivLogin>
    );
};
