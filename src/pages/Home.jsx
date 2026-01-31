import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const isLogged = localStorage.getItem("isLogged");
  const utente = JSON.parse(localStorage.getItem("utenteRegistrato") || "{}");

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Benvenuto {isLogged && utente.nome ? utente.nome : ""} nel nostro eCommerce! 🛍️</h1>
        <p>Scopri i nostri prodotti tecnologici al miglior prezzo</p>

        {!isLogged ? (
          <div className="home-buttons">
            <Link to="/login" className="btn-primary">
              Accedi
            </Link>
            <Link to="/registrazione" className="btn-secondary">
              Registrati
            </Link>
          </div>
        ) : (
          <div className="home-buttons">
            <Link to="/prodotti" className="btn-primary">
              Vai ai prodotti
            </Link>
            <Link to="/carrello" className="btn-secondary">
              Vedi carrello
            </Link>
          </div>
        )}
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Spedizione Gratuita</h3>
          <p>Su ordini superiori a €50</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Pagamenti Sicuri</h3>
          <p>Transazioni protette al 100%</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Prodotti Garantiti</h3>
          <p>Garanzia su tutti i prodotti</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Assistenza 24/7</h3>
          <p>Supporto sempre disponibile</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
