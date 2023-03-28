import React, { useContext } from "react";
import { StyledDivRegister } from "./stylesRegister";

import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { UserContext } from "../../Contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaRegister } from "../../Components/Types&Intefaces";

type FormValues = {
    name: string;
    email: string;
    password: string;
    password2: string;
};

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(formSchemaRegister),
        mode: "onBlur",
    });


    const {onSubmitRegister} = useContext(UserContext)

    return (
        <StyledDivRegister>
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
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <div>
                    <h2>Cadastro</h2>
                    <Link to={"/"}>Retornar para o login</Link>
                </div>

                <section>
                    <input
                        type="text"
                        placeholder="Digite seu nome aqui"
                        {...register("name")}
                    />
                    <span>{errors.name?.message}</span>
                </section>

                <section>
                    <input
                        type="email"
                        placeholder="Digite seu email aqui"
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

                <section>
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        {...register("password2")}
                    />
                    <span>{errors.password2?.message}</span>
                </section>

                <button type="submit">Cadastrar</button>
            </form>
        </StyledDivRegister>
    );
};
