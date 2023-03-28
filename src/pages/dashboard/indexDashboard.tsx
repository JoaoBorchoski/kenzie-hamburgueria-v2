import React, { ReactNode, useContext } from "react";
import { Header } from "../../Components/HeaderDash";
import { CartContext } from "../../Contexts/CartContext";
import { StyledDivDashboard, StyledBoxDashboard } from "./stylesDashboard";
import { iList } from "../../Components/Types&Intefaces";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { toast } from "react-toastify";

export const Dashboard = () => {

    const { productList, productCart, setProductCart } =
        useContext(CartContext);
    const { user } = useContext(UserContext);

 
    const productLi = (element: iList, index: number): ReactNode => {
        return (
            <li key={index}>
                <figure>
                    <img src={element.img} alt={element.name} />
                </figure>
                <div>
                    <h2>{element.name}</h2>
                    <span style={{ opacity: 0.6 }}>{element.category}</span>
                    <h3>R${element.price}</h3>
                    <button
                        onClick={() => {
                            const finder =
                                productCart.find(
                                    (product) => product.name === element.name
                                ) || "";
                            if (finder === "") {
                                setProductCart([...productCart, element]);
                            }
                            toast.success(`${element.name} adicionado`);
                        }}
                    >
                        Adicionar
                    </button>
                </div>
            </li>
        );
    };

    const token = localStorage.getItem('@burgerKenzie:token') || ''

    return token !== '' ? (
        <StyledDivDashboard>
            <Header />
            <StyledBoxDashboard>
                <ul>
                    {productList.length &&
                        productList.map((element: iList) =>
                            productLi(element, element.id)
                        )}
                </ul>
            </StyledBoxDashboard>
        </StyledDivDashboard>
    ) : (
        <Navigate to="/" />
    );
};
