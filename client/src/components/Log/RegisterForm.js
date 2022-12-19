import "../../styles/loginForm.scss";
import React, { useState } from "react";
import axios from "axios";
import Home from "../../pages/Home";
// import Home from "../Home/Home";

export default function RegisterForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const errorEmail = document.getElementById("email-error");

  const handleChange = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3000/register`,
      withCredentials: true,
      data: {
        firstname,
        lastname,
        email,
        password,
        adress,
        postalCode,
        city,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("uid", res.data.user.id);
        setIsLogin(true);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err.response.data);
        errorEmail.innerHTML = "Un email valide et un mot de passe sont nécessaires !";
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {isLogin ? (
        <Home />
      ) : (
        <div className="loginForm">
          <h2>Inscrivez-vous !</h2>
          <form action="" onSubmit={handleChange} id="form">
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="Nom"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              placeholder="Prénom"
            />
              <div id="email-error"></div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <input
              type="text"
              name="adress"
              id="adress"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              placeholder="Adressse: N° et nom de la voix"
            />
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
              placeholder="Code postal"
            />
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="Ville"
            />

            <input className="btn-form" type="submit" value="S'inscrire" />
          </form>
        </div>
      )}
    </>
  );
}
