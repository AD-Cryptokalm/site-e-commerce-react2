import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/account.scss";
import UpdateProfil from './UpdateProfil'

export default function Account() {
  const [toogleUpdateProfil, setUpdateProfil] = useState(false)
  const userData = useSelector((state) => state.userReducer);
  console.log(userData);

  const handleClick = () => {
    toogleUpdateProfil ? setUpdateProfil(false) : setUpdateProfil(true);
  };

  return (
    <div className="account">
      <h2 className="account-tilte">Mon Compte</h2>
      <div className="account-block">
      <div className="account-left">
        <h3 className="account-title">Historique des commande</h3>
        <p>Vous n'avez pas encore passé de commandes</p>
      </div>
      <div className="account-right">
        <h3 className="account-title">Détails du compte</h3>
        <p className="account-name">
          {userData.firstname} {userData.lastname}
        </p>
        <p className="account-adress">{userData.adress}</p>
          <p className="account-adress">
            {userData.postalCode} {userData.city}
          </p>
        <p className="account-adress"></p>
      </div>
      </div>
      
        <button className="toogle-updateProfil" onClick={handleClick}>
          <i className="fa-solid fa-file-pen"></i>
           <div className="btn-anim">Modifiez vôtre profil</div>
        </button>
        {toogleUpdateProfil && <UpdateProfil/>}
    </div>
  );
}
