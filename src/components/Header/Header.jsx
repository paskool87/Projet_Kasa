import logo from "../../assets/logos/Kasa_logo.svg";
import "./Header.css"


function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  );
}

export default Header;
