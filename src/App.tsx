import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/indexDashboard";
import { Login } from "./pages/login/indexLogin";
import { Register } from "./pages/register/indexRegister";
import { StyledBody } from "./Styles/style";
import { UserProvider } from "./Contexts/UserContext";
import { ToastContainer, Zoom } from "react-toastify";
import { CartProvider } from "./Contexts/CartContext";

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <StyledBody>
                    <ToastContainer autoClose={2000} transition={Zoom} position='top-left'/>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<h1>error</h1>} />
                    </Routes>
                </StyledBody>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
