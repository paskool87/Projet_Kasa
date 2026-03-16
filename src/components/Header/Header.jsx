import logo from "../../assets/logos/Kasa_logo.svg";
import "./Header.scss"


function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa logo" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/about" className="nav-link">
          À propos
        </a>
      </nav>
    </header>
  );
}

export default Header;
