import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    setIsLogged(!!logged);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
    setMenuOpen(false);
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/" onClick={closeMenu}>
        MyShop
      </Link>

      <button 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <Link className="nav-link" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className="nav-link" to="/chi-siamo" onClick={closeMenu}>
          Chi Siamo
        </Link>
        <Link className="nav-link" to="/prodotti" onClick={closeMenu}>
          Prodotti
        </Link>

        {isLogged && (
          <>
            <Link className="nav-link" to="/carrello" onClick={closeMenu}>
              Carrello
            </Link>
            <Link className="nav-link" to="/ordini" onClick={closeMenu}>
              Ordini
            </Link>
          </>
        )}

        {!isLogged ? (
          <Link className="btn-login" to="/login" onClick={closeMenu}>
            Login
          </Link>
        ) : (
          <button className="btn-logout" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
