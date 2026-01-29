import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="banner"></div>

      <h1>Benvenuto in VerdePal Pallet</h1>
      <p>
        Scopri i nostri pallet in legno, resistenti, sicuri e sostenibili per ogni tua esigenza logistica.
      </p>

      <div className="quick-links">
        <Link to="/prodotti">I nostri Prodotti</Link>
        <Link to="/chisiamo">Chi Siamo</Link>
        <Link to="/contatti">Contattaci</Link>
      </div>
    </div>
  );
};

export default Home;
