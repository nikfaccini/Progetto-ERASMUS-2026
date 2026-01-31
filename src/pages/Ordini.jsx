import React, { useState, useEffect } from 'react';
import './Ordini.css';

const Ordini = () => {
  const [ordini, setOrdini] = useState([]);

  // Carica gli ordini dal localStorage
  useEffect(() => {
    const ordiniSalvati = localStorage.getItem("ordini");
    if (ordiniSalvati) {
      setOrdini(JSON.parse(ordiniSalvati));
    }
  }, []);

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
                <h3>Ordine #{ordine.id}</h3>
                <p className="ordine-data">{ordine.data}</p>
              </div>

              <div className="ordine-prodotti">
                {ordine.prodotti.map((prodotto) => (
                  <div key={prodotto.id} className="prodotto-ordine">
                    <span className="prodotto-emoji">{prodotto.immagine}</span>
                    <div className="prodotto-dettagli">
                      <p className="prodotto-nome">{prodotto.nome}</p>
                      <p className="prodotto-info">
                        Quantità: {prodotto.quantita} × € {prodotto.prezzo.toFixed(2)}
                      </p>
                    </div>
                    <p className="prodotto-subtotale">
                      € {(prodotto.prezzo * prodotto.quantita).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="ordine-totale">
                <span>Totale:</span>
                <span className="totale-prezzo">€ {ordine.totale.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ordini;
