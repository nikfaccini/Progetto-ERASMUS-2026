import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const isLogged = localStorage.getItem("isLogged");
  const utente = JSON.parse(localStorage.getItem("utenteRegistrato") || "{}");

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Benvenuto {isLogged && utente.nome ? utente.nome : ""} su MyShop! 📦</h1>
        <p>La tua soluzione per pallet e accessori logistici di qualità</p>

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
              Vai al catalogo
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
          <h3>Consegna Rapida</h3>
          <p>Spedizioni in tutta Italia con corrieri specializzati</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">♻️</div>
          <h3>Materiali Sostenibili</h3>
          <p>Pallet in legno certificato e materiali riciclati</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h3>Qualità Garantita</h3>
          <p>Prodotti testati e conformi agli standard europei</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Assistenza Dedicata</h3>
          <p>Supporto per aziende e ordini personalizzati</p>
        </div>
      </div>

      <div className="info-section">
        <h2>I Nostri Prodotti</h2>
        <div className="prodotti-preview">
          <div className="prodotto-preview-card">
            <div className="preview-icon">📦</div>
            <h3>Pallet</h3>
            <p>Pallet in legno, plastica e legno pressato per ogni esigenza</p>
          </div>
          <div className="prodotto-preview-card">
            <div className="preview-icon">🔧</div>
            <h3>Accessori</h3>
            <p>Paretali, planche e soluzioni per la protezione delle merci</p>
          </div>
          <div className="prodotto-preview-card">
            <div className="preview-icon">🏪</div>
            <h3>Espositori</h3>
            <p>Display e strutture in pallet per l'esposizione prodotti</p>
          </div>
        </div>
      </div>

      <div className="chi-siamo-preview">
        <div className="chi-siamo-content">
          <h2>Chi Siamo</h2>
          <p>
            VerdePal Pallet nasce nel 2014 con l'obiettivo di fornire pallet di qualità 
            con un forte impegno verso la sostenibilità ambientale. La nostra esperienza 
            e attenzione al cliente ci rendono un partner affidabile per le tue esigenze logistiche.
          </p>
          <Link to="/chi-siamo" className="btn-scopri">
            Scopri di più →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
