import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    setIsLogged(!!logged);
  }, [location]);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-section brand">
          <h3>MyShop</h3>
          <p>
            Il tuo shop online di fiducia. <br />
            Qualità, sicurezza e spedizioni rapide.
          </p>
          <span className="copyright">
            © {new Date().getFullYear()} MyShop
          </span>
        </div>

        {/* LINK */}
        <div className="footer-section">
          <h4>Esplora</h4>
          <Link to="/">Home</Link>
          <Link to="/prodotti">Prodotti</Link>
          {isLogged && <Link to="/carrello">Carrello</Link>}
          {isLogged && <Link to="/ordini">Ordini</Link>}
        </div>

        {/* ACCOUNT */}
        <div className="footer-section">
          <h4>Account</h4>
          {!isLogged ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/registrazione">Registrati</Link>
            </>
          ) : (
            <span className="logged">Utente loggato</span>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
