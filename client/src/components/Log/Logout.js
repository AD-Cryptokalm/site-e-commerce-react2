import React from 'react'
// import { Navigate } from 'react-router-dom';

export default function Logout() {

    const handlleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('uid')
        window.location = "/";
    }

  return (

    <div className="navBar-topMenuLink" onClick={handlleLogout}> Se déconnecter</div>
  )
}

