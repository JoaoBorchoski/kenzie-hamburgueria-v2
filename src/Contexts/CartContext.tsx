import { createContext, useContext, useEffect, useState } from "react";
import { iContextProps, iList } from "../Components/Types&Intefaces";
import { Api } from "../Services/mainApi";
import { UserContext } from "./UserContext";

interface iCartContext {
    productList: iList[];
    productCart: iList[];
    setProductCart: React.Dispatch<React.SetStateAction<iList[]>>;
    setProductList: React.Dispatch<React.SetStateAction<iList[]>>;
    observer: number;
    setObserver: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iContextProps) => {
    const [productList, setProductList] = useState([] as iList[]);
    const [productCart, setProductCart] = useState([] as iList[]);
    const [observer, setObserver] = useState(0);

    const { user } = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem("@burgerKenzie:token");
        async function getProducts() {
            try {
                const response = await Api.get("/products", {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                setProductList(response.data);
            } catch (error) {
            }
        }
        getProducts();
    }, [user, observer]);

    return (
        <CartContext.Provider
            value={{ productList, productCart, setProductCart, setProductList, observer, setObserver }}
        >
            {children}
        </CartContext.Provider>
    );
};
