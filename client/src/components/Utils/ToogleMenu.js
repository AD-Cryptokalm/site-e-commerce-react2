import React from "react";
import { NavLink } from "react-router-dom";

export default function ToogleMenu() {
  return (
    <nav className="toogleMenu">
      <ul className="toogleMenu-links">
        <NavLink to={"/"}>
          <li className="toogleMennu-link">Accueil</li>
        </NavLink>
        <NavLink to={"/products"}>
          <li className="toogleMennu-link">Boutique</li>
        </NavLink>
        <NavLink to={""}>
          <li className="toogleMennu-link">Notre histoire</li>
        </NavLink>
        <NavLink to={"/login"}>
          <li className="toogleMennu-link">Se connecter</li>
        </NavLink>
        <NavLink to={"/register"}>
          <li className="toogleMennu-link">S'inscrire</li>
        </NavLink>
        <li className="toogleMennu-link">
          <div className="navBar-formSearch">
            <form action="/search" method="get" className="" role="search">
              <button type="submit" className="">
                <i className="fa-solid fa-magnifying-glass "></i>
              </button>
              <input
                type="search"
                name="q"
                defaultValue=""
                aria-label="Rechercher"
                className=""
                placeholder="Rechercher"
              />
            </form>
          </div>
        </li>
      </ul>
    </nav>
  );
}
