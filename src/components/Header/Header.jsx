import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/Kasa_logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
