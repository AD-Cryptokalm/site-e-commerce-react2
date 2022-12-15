import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Footer from "./Utils/Footer";
import Home from "../pages/Home";
import LoginForm from "./Log/LoginForm";
import RegisterForm from "./Log/RegisterForm";
import NavBar from "./Utils/NavBar";
import Page404 from "./Utils/Page404";
import Products from "../pages/Products"
import UpdateProfil from "../pages/UpdateProfil";
import Account from "../pages/Account";

export default function RoutesNavigate() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/account" element={<Account />} />
        <Route path="/profil" element={<UpdateProfil />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
        {/* <Route path="boutique" element={<Boutique />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
