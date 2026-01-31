import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accesso.css";

const Registrazione = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");
  const [errore, setErrore] = useState("");

  const salva = (e) => {
    e.preventDefault();

    // Validazione password
    if (password !== confermaPassword) {
      setErrore("Le password non corrispondono!");
      return;
    }

    if (password.length < 6) {
      setErrore("La password deve essere di almeno 6 caratteri");
      return;
    }

    const utente = {
      nome,
      cognome,
      email,
      password,
    };

    // 🔐 Salvataggio localStorage
    localStorage.setItem("utenteRegistrato", JSON.stringify(utente));

    console.log("Utente salvato:", utente);

    // Reindirizza al login
    navigate("/login");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Crea Account</h1>
        <p>Registrati per iniziare</p>

        <form onSubmit={salva}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Mario"
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cognome">Cognome</label>
              <input
                type="text"
                id="cognome"
                placeholder="Rossi"
                onChange={(e) => setCognome(e.target.value)}
                required
              />
            </div>
          </div>

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

          <div className="form-group">
            <label htmlFor="confirm-password">Conferma Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              onChange={(e) => setConfermaPassword(e.target.value)}
              required
            />
          </div>

          {errore && (
            <p style={{ color: "#ff6b6b", marginTop: "10px" }}>{errore}</p>
          )}

          <button type="submit" className="login-button">
            Registrati
          </button>
        </form>

        <div className="extra-links">
          <p>
            Hai già un account? <a href="/login">Accedi</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registrazione;
