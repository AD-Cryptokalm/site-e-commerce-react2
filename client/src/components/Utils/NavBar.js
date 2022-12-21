import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navBar.scss";
import { UidContext } from "../context/authContext";
import Logout from "../Log/Logout";

export default function NavBar() {
  const uid = useContext(UidContext);

  return (
    <div className="navBar">
      <div className="navBar-top flex">
        <div className="navBar-topText">
          Livraison gratuite à partir de 50 euros
          en France Métropolitaine
        </div>
        <div className="navBar-topMenu flex">
          <button className="navBar-btnMenuToogle"><i className="fa-solid fa-bars"></i></button>
          {uid ? (
            <>
              <NavLink to="/account">
                <div className="navBar-topMenuLink">Mon compte </div>
              </NavLink>
              <div> ou </div>
              <>
                <Logout/>
              </>
            </>
          ) : (
            <div className="navBar-btnLog">
              <NavLink to="/login">
                <div className="navBar-topMenuLink">Se connecter </div>
              </NavLink>
              <div> ou </div>
              <NavLink to="/register">
                <div className="navBar-topMenuLink"> Créer un compte</div>
              </NavLink>
            </div>
          )}
          <NavLink to="/cart">
            <div className="navBar-topMenuLink">
              <i className="fa-solid fa-cart-shopping navBar-iconCart"></i>
              Panier
            </div>
          </NavLink>
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
            {/* <label for="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            <input type="search" id="search" name="search" placeholder="Rechercher"></input> */}
          </div>
        </div>
      </div>
      <div className="navBar-bottom flex">
        <div className="navBar-bottomRight">
          <NavLink to="/">
            <div className="navBar-bottomLogo">
              <img src="../images/logo.png" alt="logo entreprise" />
            </div>
          </NavLink>
          <div className="navBar-bottomTitle">
            <h1>Mon Univers Enchanté</h1>
          </div>
        </div>
        <div className="navBar-bottomLeft">
          <div className="navBar-bottomMenu flex">
            <NavLink to="/">
              <div className="navBar-bottomMenuLink">ACCUEIL</div>
            </NavLink>
            <NavLink to="/products">
              <div className="navBar-bottomMenuLink">BOUTIQUE</div>
            </NavLink>
            <NavLink to="/">
              <div className="navBar-bottomMenuLink">NOTRE HISTOIRE</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
