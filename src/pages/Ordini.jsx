import React, { useState, useEffect } from 'react';
import './Ordini.css';

const Ordini = () => {
  const [ordini, setOrdini] = useState([]);

  useEffect(() => {
    const ordiniSalvati = localStorage.getItem("ordini");
    if (ordiniSalvati) {
      const ordiniArray = JSON.parse(ordiniSalvati);
      setOrdini(ordiniArray.reverse());
    }
  }, []);

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
    <div className="ordini-container">
      <h1>Storico Ordini</h1>

      {ordini.length === 0 ? (
        <div className="nessun-ordine">
          <p>Non hai ancora effettuato ordini 📦</p>
        </div>
      ) : (
        <div className="ordini-lista">
          {ordini.map((ordine) => (
            <div key={ordine.id} className="ordine-card">
              <div className="ordine-header">
                <div>
                  <h3>Ordine #{ordine.id}</h3>
                  <p className="ordine-data">📅 {ordine.data}</p>
                </div>
                <div className="ordine-badge">
                  {ordine.prodotti.reduce((tot, p) => tot + p.quantita, 0)} articoli
                </div>
              </div>

              <div className="ordine-prodotti">
                {ordine.prodotti.map((prodotto) => (
                  <div key={prodotto.id} className="prodotto-ordine">
                    {prodotto.immagine ? (
                      <img 
                        src={prodotto.immagine} 
                        alt={prodotto.nome}
                        className="prodotto-immagine"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span 
                      className="prodotto-emoji" 
                      style={{ display: prodotto.immagine ? 'none' : 'inline-block' }}
                    >
                      {getEmojiCategoria(prodotto.categoria)}
                    </span>

                    <div className="prodotto-dettagli">
                      <p className="prodotto-nome">{prodotto.nome}</p>
                      <p className="prodotto-categoria">{prodotto.categoria}</p>
                      <p className="prodotto-info">
                        {prodotto.quantita} × € {prodotto.prezzo.toFixed(2)} = 
                        <strong> € {(prodotto.prezzo * prodotto.quantita).toFixed(2)}</strong>
                      </p>
                      <p className="prodotto-specifiche">
                        {prodotto.materiale} • {prodotto.dimensioni_cm} cm • {prodotto.peso_kg} kg
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ordine-riepilogo">
                <div className="ordine-info">
                  <p>Peso totale: <strong>{ordine.prodotti.reduce((tot, p) => tot + (p.peso_kg * p.quantita), 0)} kg</strong></p>
                </div>
                <div className="ordine-totale">
                  <span>Totale:</span>
                  <span className="totale-prezzo">€ {ordine.totale.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ordini;