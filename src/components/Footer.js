import { Link } from 'react-router-dom';
import './Footer.css';
import logo from './logo-senza.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Icona" width="150" />
          <p>La tua soluzione per pallet e accessori logistici di qualità dal 2014.</p>
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

      </div>

      <div className="footer-bottom">
        <p>&copy;VerdePal Pallet. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
