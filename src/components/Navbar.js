import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  // Controlla lo stato del login ogni volta che cambia la route
  useEffect(() => {
    const logged = localStorage.getItem("isLogged");
    setIsLogged(!!logged);
  }, [location]);

  const logout = () => {
    localStorage.removeItem("isLogged");
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MyShop</Link>

      <div>
        <Link className="btn btn-link text-white" to="/">Home</Link>
        <Link className="btn btn-link text-white" to="/prodotti">Prodotti</Link>

        {isLogged && (
          <>
            <Link className="btn btn-link text-white" to="/carrello">
              Carrello
            </Link>
            <Link className="btn btn-link text-white" to="/ordini">
              Ordini
            </Link>
          </>
        )}

        {!isLogged ? (
          <Link className="btn btn-outline-light ms-2" to="/login">
            Login
          </Link>
        ) : (
          <button className="btn btn-outline-danger ms-2" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
