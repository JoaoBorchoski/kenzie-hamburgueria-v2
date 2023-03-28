import React, { useContext, useState } from "react";

import {
    StyledCart,
    StyledHeaderDashboard,
} from "../../pages/dashboard/stylesDashboard";

import { TbSearch } from "react-icons/tb";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { UserContext } from "../../Contexts/UserContext";

import Modal from "react-modal";
import { CartContext } from "../../Contexts/CartContext";

import { CgClose, CgTrashEmpty } from "react-icons/cg";

import { EmptyCart } from "../Cart";
import { iList } from "../Types&Intefaces";

export const Header = () => {
    Modal.setAppElement("#root");

    const { LogOut } = useContext(UserContext);
    const { productCart, setProductCart, productList, setProductList, observer, setObserver } = useContext(CartContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    function renderCartProducts(element: iList, index: number) {
        return (
            <li key={index} id={`${index}`}>
                <div>
                    <figure>
                        <img src={element.img} alt={element.name} />
                    </figure>
                    <section>
                        <h2>{element.name}</h2>
                        <p>1</p>
                    </section>
                </div>
                <button
                    onClick={() => {
                        let index = productCart.indexOf(element);
                        let arr = [...productCart];
                        if (index > -1) {
                            arr.splice(index, 1);
                        }
                        setProductCart(arr);
                    }}
                >
                    <CgTrashEmpty size={30} color={"#495057"} />
                </button>
            </li>
        );
    }

    function totalMoney() {
        let contador = 0;

        productCart.forEach((element) => {
            contador += element.price;
        });

        return contador.toFixed(2);
    }

    function searchProduct(value: string) {
        const search = productList.filter((product) =>
            product.name.toLowerCase().includes(value.trim().toLowerCase())
        );
        if (value === "") {
            setObserver(observer + 1);
        }

        return setProductList(search);
    }

    return (
        <StyledHeaderDashboard>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo modal"
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgb(153, 153, 153, .5)",
                    },
                    content: {
                        position: "absolute",
                        margin: "0 auto",
                        width: "90%",
                        maxWidth: "500px",
                        height: "90%",
                        maxHeight: "650px",
                        background: "#fff",
                        padding: 0,
                        border: "none",
                        inset: 0,
                        top: '50px',
                    },
                }}
            >
                <StyledCart>
                    <header>
                        <div>
                            <h2>Carrinho de compras</h2>
                            <button onClick={closeModal}>
                                <CgClose size={30} color={"white"} />
                            </button>
                        </div>
                    </header>
                    <ul>
                        {productCart.length === 0
                            ? EmptyCart()
                            : productCart.map((element: iList) =>
                                  renderCartProducts(element, element.id)
                              )}
                    </ul>
                    {productCart.length === 0 ? null : (
                        <div>
                            <section>
                                <p>Total</p>
                                <span>R${totalMoney()}</span>
                            </section>
                            <button onClick={() => setProductCart([])}>
                                Remover todos
                            </button>
                        </div>
                    )}
                </StyledCart>
            </Modal>
            <header>
                <h1>
                    Burger <span>Kenzie</span>
                </h1>
                <div>
                    <form>
                        <input
                            onChange={(event) =>
                                searchProduct(event.target.value)
                            }
                            type="text"
                            placeholder="Digitar Pesquisa"
                        />
                        <button type="submit">
                            <TbSearch size={30} color="#eb6440" />
                        </button>
                    </form>
                    <button onClick={openModal}>
                        <RiShoppingCart2Fill size={30} color="#495057" />
                    </button>
                    <button onClick={LogOut}>
                        <MdLogout size={30} color="#495057" />
                    </button>
                </div>
            </header>
        </StyledHeaderDashboard>
    );
};
