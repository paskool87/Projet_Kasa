// ScrollManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

function ScrollManager({ children }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Restaurer scroll au moment du montage
    if (path === "/") {
      if (scrollPositions[path] !== undefined) {
        window.scrollTo(0, scrollPositions[path]);
      }

      // Écoute du scroll uniquement tant qu'on est sur Home
      const handleScroll = () => {
        // Vérifie encore si on est sur Home
        if (window.location.pathname === "/") {
          scrollPositions[path] = window.scrollY;
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Nettoyage de l'écouteur à la sortie de Home
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Autres pages : scroll en haut
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
}

export default ScrollManager;