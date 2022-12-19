import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios'
// import {
//   updateAdress,
//   updateEmail,
//   updateFirstname,
// } from "../actions/userAction";
// import { UidContext } from "../components/context/authContext";
import "../styles/updateProfil.scss";
import { updateUser } from "../actions/userAction";

export default function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer);
  // const token = useContext(UidContext);
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState(userData.firstname);
  const [lastname, setLastname] = useState(userData.lastname);
  const [password, setPassword] = useState("")
  const [adress, setAdress] = useState(userData.adress);
  const [postalCode, setPostalCode] = useState(userData.setPostalCode);
  const [city, setCity] = useState(userData.city);
  const dispatch = useDispatch();

  const handleChange = () => {
    // e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:3000/users/${userData.id}`,
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
      .then((res) => dispatch(updateUser(userData.id, res)))
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
          placeholder={userData.firstname}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder={userData.lastname}
        />
        <input
          type="text"
          name="adress"
          id="adress"
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
          placeholder={userData.adress}
        />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          placeholder={userData.postalCode}
        />
        <input
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder={userData.city}
        />
         <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email obligatoire !"
        />
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
