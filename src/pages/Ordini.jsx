import React, { useState, useEffect } from 'react';
import './Ordini.css';

const Ordini = () => {
  const [ordini, setOrdini] = useState([]);

  // Carica gli ordini quando la pagina si apre
  useEffect(() => {
    const ordiniSalvati = localStorage.getItem("ordini");
    if (ordiniSalvati) {
      const ordiniArray = JSON.parse(ordiniSalvati);
      
      // Inverte l'ordine (dal più recente al più vecchio)
      const ordiniInvertiti = [];
      for (let i = ordiniArray.length - 1; i >= 0; i--) {
        ordiniInvertiti.push(ordiniArray[i]);
      }
      
      setOrdini(ordiniInvertiti);
    }
  }, []);

  // Restituisce l'emoji in base alla categoria
  const getEmojiCategoria = (categoria) => {
    if (categoria === "Pallet") {
      return "📦";
    } else if (categoria === "Accessori pallet") {
      return "🔧";
    } else if (categoria === "Protezione merci") {
      return "🛡️";
    } else if (categoria === "Espositori") {
      return "🏪";
    } else {
      return "📦";
    }
  };

  // Calcola il numero totale di articoli in un ordine
  const calcolaNumeroArticoli = (prodotti) => {
    let totale = 0;
    for (let i = 0; i < prodotti.length; i++) {
      totale = totale + prodotti[i].quantita;
    }
    return totale;
  };

  // Calcola il peso totale di un ordine
  const calcolaPesoTotale = (prodotti) => {
    let pesoTotale = 0;
    for (let i = 0; i < prodotti.length; i++) {
      pesoTotale = pesoTotale + (prodotti[i].peso * prodotti[i].quantita);
    }
    return pesoTotale;
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
                  {calcolaNumeroArticoli(ordine.prodotti)} articoli
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
                        {prodotto.materiale} • {prodotto.dimensioni} • {prodotto.peso} kg
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ordine-riepilogo">
                <div className="ordine-info">
                  <p>Peso totale: <strong>{calcolaPesoTotale(ordine.prodotti)} kg</strong></p>
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
