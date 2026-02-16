import React, { useState, useEffect } from 'react';
import './Prodotti.css';
import catalogoData from '../catalogo/catalogo.json';

const Prodotti = () => {
  const isLogged = localStorage.getItem("isLogged");
  const [messaggio, setMessaggio] = useState("");
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    setProdotti(catalogoData.catalogo.prodotti);
  }, []);

  const aggiungiAlCarrello = (prodotto) => {
    const carrelloSalvato = localStorage.getItem("carrello");
    const carrello = carrelloSalvato ? JSON.parse(carrelloSalvato) : [];

    const prodottoEsistente = carrello.find((item) => item.id === prodotto.id);

    if (prodottoEsistente) {
      prodottoEsistente.quantita += 1;
    } else {
      carrello.push({ ...prodotto, quantita: 1 });
    }

    localStorage.setItem("carrello", JSON.stringify(carrello));

    setMessaggio(`✅ ${prodotto.nome} aggiunto al carrello!`);
    setTimeout(() => setMessaggio(""), 3000);
  };

  const getEmojiCategoria = (categoria) => {
    switch (categoria) {
      case "Pallet":
        return "📦";
      case "Accessori pallet":
        return "🔧";
      case "Protezione merci":
        return "🛡️";
      case "Espositori":
        return "🏪";
      default:
        return "📦";
    }
  };

  return (
    <div className="prodotti-container">
      <h1>Catalogo Prodotti</h1>
      <p className="sottotitolo">I nostri pallet e accessori per la logistica</p>

      {messaggio && <div className="messaggio-successo">{messaggio}</div>}

      <div className="prodotti-grid">
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} className="prodotto-card">
            <div className="prodotto-badge">{prodotto.categoria}</div>
            
            {prodotto.immagine ? (
              <img 
                src={prodotto.immagine} 
                alt={prodotto.nome}
                className="prodotto-immagine-foto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            ) : null}
            <div 
              className="prodotto-immagine-emoji" 
              style={{ display: prodotto.immagine ? 'none' : 'block' }}
            >
              {getEmojiCategoria(prodotto.categoria)}
            </div>
            
            <h3>{prodotto.nome}</h3>
            <p className="descrizione">{prodotto.descrizione}</p>
            
            <div className="prodotto-dettagli">
              <p><strong>Materiale:</strong> {prodotto.materiale}</p>
              <p><strong>Dimensioni:</strong> {prodotto.dimensioni_cm} cm</p>
              <p><strong>Peso:</strong> {prodotto.peso_kg} kg</p>
              <p className={prodotto.disponibilita > 50 ? "disponibilita" : "disponibilita-bassa"}>
                {prodotto.disponibilita > 0 
                  ? `✅ ${prodotto.disponibilita} disponibili` 
                  : "❌ Non disponibile"}
              </p>
            </div>

            <p className="prezzo">€ {prodotto.prezzo.toFixed(2)}</p>

            <button
              className={isLogged && prodotto.disponibilita > 0 ? "btn-aggiungi" : "btn-disabilitato"}
              onClick={() => aggiungiAlCarrello(prodotto)}
              disabled={!isLogged || prodotto.disponibilita === 0}
            >
              {!isLogged 
                ? "Accedi per acquistare" 
                : prodotto.disponibilita === 0 
                  ? "Non disponibile" 
                  : "Aggiungi al carrello"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;
