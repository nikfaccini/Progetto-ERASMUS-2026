import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carrello.css';

const Carrello = () => {
  const navigate = useNavigate();
  const [carrello, setCarrello] = useState([]);

  // Carica il carrello quando la pagina si apre
  useEffect(() => {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
      setCarrello(JSON.parse(carrelloSalvato));
    }
  }, []);

  // Calcola il totale del carrello
  const calcolaTotale = () => {
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
      totale = totale + (carrello[i].prezzo * carrello[i].quantita);
    }
    return totale;
  };

  // Rimuove un prodotto dal carrello
  const rimuoviProdotto = (id) => {
    const nuovoCarrello = [];
    for (let i = 0; i < carrello.length; i++) {
      if (carrello[i].id !== id) {
        nuovoCarrello.push(carrello[i]);
      }
    }
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Aumenta la quantità di un prodotto
  const aumentaQuantita = (id) => {
    const nuovoCarrello = [];
    for (let i = 0; i < carrello.length; i++) {
      if (carrello[i].id === id) {
        if (carrello[i].quantita < carrello[i].disponibilita) {
          const itemAggiornato = {
            id: carrello[i].id,
            nome: carrello[i].nome,
            prezzo: carrello[i].prezzo,
            categoria: carrello[i].categoria,
            immagine: carrello[i].immagine,
            materiale: carrello[i].materiale,
            dimensioni: carrello[i].dimensioni,
            peso: carrello[i].peso,
            disponibilita: carrello[i].disponibilita,
            quantita: carrello[i].quantita + 1
          };
          nuovoCarrello.push(itemAggiornato);
        } else {
          alert("Disponibilità massima raggiunta: " + carrello[i].disponibilita + " unità");
          nuovoCarrello.push(carrello[i]);
        }
      } else {
        nuovoCarrello.push(carrello[i]);
      }
    }
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Diminuisce la quantità di un prodotto
  const diminuisciQuantita = (id) => {
    const nuovoCarrello = [];
    for (let i = 0; i < carrello.length; i++) {
      if (carrello[i].id === id && carrello[i].quantita > 1) {
        const itemAggiornato = {
          id: carrello[i].id,
          nome: carrello[i].nome,
          prezzo: carrello[i].prezzo,
          categoria: carrello[i].categoria,
          immagine: carrello[i].immagine,
          materiale: carrello[i].materiale,
          dimensioni: carrello[i].dimensioni,
          peso: carrello[i].peso,
          disponibilita: carrello[i].disponibilita,
          quantita: carrello[i].quantita - 1
        };
        nuovoCarrello.push(itemAggiornato);
      } else {
        nuovoCarrello.push(carrello[i]);
      }
    }
    setCarrello(nuovoCarrello);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
  };

  // Completa l'ordine
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

    // Salva l'ordine
    const ordiniSalvati = localStorage.getItem("ordini");
    let ordini = [];
    if (ordiniSalvati) {
      ordini = JSON.parse(ordiniSalvati);
    }
    ordini.push(ordine);
    localStorage.setItem("ordini", JSON.stringify(ordini));

    // Svuota il carrello
    setCarrello([]);
    localStorage.removeItem("carrello");

    alert("Ordine effettuato con successo!");
    navigate("/ordini");
  };

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

  // Calcola il numero totale di articoli nel carrello
  const calcolaNumeroArticoli = () => {
    let totale = 0;
    for (let i = 0; i < carrello.length; i++) {
      totale = totale + carrello[i].quantita;
    }
    return totale;
  };

  // Calcola il peso totale del carrello
  const calcolaPesoTotale = () => {
    let pesoTotale = 0;
    for (let i = 0; i < carrello.length; i++) {
      pesoTotale = pesoTotale + (carrello[i].peso * carrello[i].quantita);
    }
    return pesoTotale;
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
                      {item.materiale} • {item.dimensioni} • {item.peso} kg
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
                <span>{calcolaNumeroArticoli()}</span>
              </div>
              <div className="riga-riepilogo">
                <span>Peso totale:</span>
                <span>{calcolaPesoTotale()} kg</span>
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
