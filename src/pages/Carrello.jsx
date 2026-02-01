import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carrello.css';

const Carrello = () => {
  const navigate = useNavigate();
  const [carrello, setCarrello] = useState([]);

  // Carica il carrello dal localStorage quando il componente viene montato
  useEffect(() => {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
      setCarrello(JSON.parse(carrelloSalvato));
    }
  }, []);

  // Calcola il totale
  const calcolaTotale = () => {
    return carrello.reduce((totale, item) => totale + item.prezzo * item.quantita, 0);
  };

  // Rimuovi prodotto dal carrello
  const rimuoviProdotto = (id) => {
    const nuovoCarrello = carrello.filter((item) => item.id !== id);
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Aumenta quantità
  const aumentaQuantita = (id) => {
    const nuovoCarrello = carrello.map((item) => {
      if (item.id === id) {
        // Controlla se c'è ancora disponibilità
        if (item.quantita < item.disponibilita) {
          return { ...item, quantita: item.quantita + 1 };
        } else {
          alert(`Disponibilità massima raggiunta: ${item.disponibilita} unità`);
          return item;
        }
      }
      return item;
    });
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Diminuisci quantità
  const diminuisciQuantita = (id) => {
    const nuovoCarrello = carrello.map((item) =>
      item.id === id && item.quantita > 1 ? { ...item, quantita: item.quantita - 1 } : item
    );
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Procedi all'ordine
  const procediOrdine = () => {
    if (carrello.length === 0) {
      alert("Il carrello è vuoto!");
      return;
    }

    // Crea l'ordine
    const ordine = {
      id: Date.now(),
      data: new Date().toLocaleString('it-IT'),
      prodotti: carrello,
      totale: calcolaTotale(),
    };

    // Salva l'ordine nello storico
    const ordiniSalvati = localStorage.getItem("ordini");
    const ordini = ordiniSalvati ? JSON.parse(ordiniSalvati) : [];
    ordini.push(ordine);
    localStorage.setItem("ordini", JSON.stringify(ordini));

    // Svuota il carrello
    setCarrello([]);
    localStorage.removeItem("carrello");

    // Vai alla pagina ordini
    alert("Ordine effettuato con successo!");
    navigate("/ordini");
  };

  // Emoji per le categorie (fallback)
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
    <div className="carrello-container">
      <h1>Il Tuo Carrello</h1>

      {carrello.length === 0 ? (
        <div className="carrello-vuoto">
          <p>Il carrello è vuoto 🛒</p>
          <button onClick={() => navigate("/prodotti")} className="btn-continua">
            Vai ai prodotti
          </button>
        </div>
      ) : (
        <>
          <div className="carrello-lista">
            {carrello.map((item) => (
              <div key={item.id} className="carrello-item">
                <div className="item-info">
                  {/* Mostra immagine o emoji */}
                  {item.immagine ? (
                    <img 
                      src={item.immagine} 
                      alt={item.nome}
                      className="item-immagine"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span 
                    className="item-emoji" 
                    style={{ display: item.immagine ? 'none' : 'inline-block' }}
                  >
                    {getEmojiCategoria(item.categoria)}
                  </span>

                  <div>
                    <h3>{item.nome}</h3>
                    <p className="item-categoria">{item.categoria}</p>
                    <p className="item-prezzo">€ {item.prezzo.toFixed(2)} / unità</p>
                    <p className="item-dettagli">
                      {item.materiale} • {item.dimensioni_cm} cm • {item.peso_kg} kg
                    </p>
                  </div>
                </div>

                <div className="item-azioni">
                  <div className="quantita-controlli">
                    <button onClick={() => diminuisciQuantita(item.id)}>-</button>
                    <span>{item.quantita}</span>
                    <button onClick={() => aumentaQuantita(item.id)}>+</button>
                  </div>

                  <p className="subtotale">
                    Subtotale: € {(item.prezzo * item.quantita).toFixed(2)}
                  </p>

                  <button 
                    className="btn-rimuovi" 
                    onClick={() => rimuoviProdotto(item.id)}
                  >
                    🗑️ Rimuovi
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrello-riepilogo">
            <h2>Riepilogo Ordine</h2>
            <div className="riepilogo-dettagli">
              <div className="riga-riepilogo">
                <span>Numero articoli:</span>
                <span>{carrello.reduce((tot, item) => tot + item.quantita, 0)}</span>
              </div>
              <div className="riga-riepilogo">
                <span>Peso totale:</span>
                <span>{carrello.reduce((tot, item) => tot + (item.peso_kg * item.quantita), 0)} kg</span>
              </div>
            </div>
            <div className="totale">
              <span>Totale:</span>
              <span className="prezzo-totale">€ {calcolaTotale().toFixed(2)}</span>
            </div>
            <button className="btn-ordina" onClick={procediOrdine}>
              Procedi con l'ordine
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrello;
