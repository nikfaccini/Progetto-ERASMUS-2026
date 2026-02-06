import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MyShop</h3>
          <p>La tua soluzione per pallet e accessori logistici di qualità dal 2014.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Email">✉️</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Link Utili</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chi-siamo">Chi Siamo</Link></li>
            <li><Link to="/prodotti">Prodotti</Link></li>
            <li><Link to="/carrello">Carrello</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Prodotti</h4>
          <ul>
            <li><Link to="/prodotti">Pallet in legno</Link></li>
            <li><Link to="/prodotti">Pallet in plastica</Link></li>
            <li><Link to="/prodotti">Accessori</Link></li>
            <li><Link to="/prodotti">Espositori</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contatti</h4>
          <ul className="contact-info">
            <li>📍 Via Esempio 123, Milano</li>
            <li>📞 +39 02 1234567</li>
            <li>✉️ info@myshop.it</li>
            <li>🕐 Lun-Ven: 9:00-18:00</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyShop - VerdePal Pallet. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
