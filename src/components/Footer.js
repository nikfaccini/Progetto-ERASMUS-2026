import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  // Controlla login ad ogni cambio route
  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    setIsLogged(!!logged);
  }, [location]);

  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <div className="footer-brand">
          <h4>MyShop</h4>
          <p>© 2026 Tutti i diritti riservati</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/prodotti">Prodotti</Link>

          {isLogged && (
            <>
              <Link to="/carrello">Carrello</Link>
              <Link to="/ordini">Ordini</Link>
            </>
          )}

          {!isLogged && <Link to="/login">Login</Link>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
