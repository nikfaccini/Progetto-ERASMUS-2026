import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged");

  const logout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MyShop</Link>

      <div>
        <Link className="btn btn-link text-white" to="/">Home</Link>
        <Link className="btn btn-link text-white" to="/prodotti">Prodotti</Link>

        {isLogged && (
          <Link className="btn btn-link text-white" to="/carrello">
            Carrello
          </Link>
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
