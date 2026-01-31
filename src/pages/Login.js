import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accesso.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const utenteSalvato = JSON.parse(
      localStorage.getItem("utenteRegistrato")
    );

    if (!utenteSalvato) {
      setErrore("Nessun utente registrato");
      return;
    }

    if (
      email === utenteSalvato.email &&
      password === utenteSalvato.password
    ) {
      // ✅ login OK → sessione
      localStorage.setItem("isLogged", "true");
      navigate("/"); // FIX: era "/home", ma la route è "/"
    } else {
      setErrore("Email o password non corrette");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Benvenuto</h1>
        <p>Accedi al tuo account</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="nome@email.it"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errore && (
            <p style={{ color: "#ff6b6b", marginTop: "10px" }}>{errore}</p>
          )}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="extra-links">
          <p>
            Non hai un account? <a href="/registrazione">Registrati</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
