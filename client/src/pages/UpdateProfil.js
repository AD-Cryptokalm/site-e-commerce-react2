import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/updateProfil.scss";

export default function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer);
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState(userData.firstname);
  const [lastname, setLastname] = useState(userData.lastname);
  const [adress, setAdress] = useState(userData.adress);
  const [postalCode, setPostalCode] = useState(userData.setPostalCode);
  const [city, setCity] = useState(userData.city);
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  const handleChange = () => {

    if (email !== userData.email) {
      return (emailError.innerHTML = "Email incorrect");
    }
  

    axios({
      method: "PUT",
      url: `http://localhost:3000/600/users/${userData.id}`,
      withCredentials: true,
      data: {
        firstname,
        lastname,
        password,
        email,
        adress,
        postalCode,
        city,
      },
      headers: {
        content_type: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert("Success")
        console.log(res);
         (emailError.innerHTML = "");
         (passwordError.innerHTML = "");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="updateProfil">
      <h2>Modifiez votre profil</h2>
      <form action="" onSubmit={handleChange}>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          placeholder={userData.firstname || "Nom"}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder={userData.lastname || "Pr??nom"}
        />
        <input
          type="text"
          name="adress"
          id="adress"
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
          placeholder={userData.adress || "N?? et nom de voie"}
        />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          placeholder={userData.postalCode || "Code postal"}
        />
        <input
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder={userData.city || "Ville"}
        />
        <div id="email-error"></div>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email obligatoire !"
        />
        <div id="password-error"></div>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Mot de passe obligatoire !"
        />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
    </div>
  );
}
