import logo from "../../assets/logos/Kasa_logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa logo" />

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about" >À propos</Link>
      </nav>
    </header>
  );
}

export default Header;