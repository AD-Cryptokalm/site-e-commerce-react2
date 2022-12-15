// import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAdress,
  updateEmail,
  updateFirstname,
} from "../actions/userAction";
// import { UidContext } from "../components/context/authContext";
import "../styles/updateProfil.scss";

export default function UpdateProfil() {
  const userData = useSelector((state) => state.userReducer);
  // const token = useContext(UidContext);
  // const userId = localStorage.getItem("uid");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleChangeFirstname = () => {
    dispatch(updateFirstname(userData._id, firstname));
  };
  const handleChangeLastname = () => {
    dispatch(updateFirstname(userData._id, lastname));
  };
  const handleChangeEmail = () => {
    dispatch(updateEmail(userData._id, email));
  };
  const handleChangeAdress = () => {
    dispatch(updateAdress(userData._id, adress));
  };
  const handleChangePostalCode = () => {
    dispatch(updateAdress(userData._id, postalCode));
  };
  const handleChangeCity = () => {
    dispatch(updateAdress(userData._id, city));
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "PUT",
  //     url: `http://localhost:3000/660/users/${userId}`,
  //     withCredentials: true,
  //     data: {
  //       firstname,
  //       lastname,
  //       email,
  //       adress,
  //       postalCode,
  //       city,
  //     },
  //     headers: {
  //       content_type: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="updateProfil">
          <h2>Modifiez votre profil</h2>
      <form action="" onSubmit={handleChangeFirstname} className="mini-form">
            <input
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
          placeholder={userData.firstname}
            />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
      <form action="" onSubmit={handleChangeLastname} className="mini-form">
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
          placeholder={userData.lastname}
            />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
      <form action="" onSubmit={handleChangeEmail} className="mini-form">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
          placeholder={userData.email}
            />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
      <form action="" onSubmit={handleChangeAdress} className="mini-form">
            <input
          type="text"
          name="adress"
          id="adress"
          onChange={(e) => setAdress(e.target.value)}
          value={adress}
          placeholder={userData.adress}
        />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
      <form action="" onSubmit={handleChangePostalCode} className="mini-form">
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
          placeholder={userData.postalCode}
        />
        <input className="btn-form" type="submit" value="Valider" />
      </form>
      <form action="" onSubmit={handleChangeCity} className="mini-form">
        <input
          type="text"
          name="city"
          id="city"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder={userData.city}
            />
            <input className="btn-form" type="submit" value="Valider" />
          </form>
        </div>
  );
}
