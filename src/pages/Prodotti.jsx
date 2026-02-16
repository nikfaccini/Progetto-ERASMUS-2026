import React, { useState, useEffect } from 'react';
import './Prodotti.css';
import catalogoData from '../catalogo/catalogo.json';

const Prodotti = () => {
  const isLogged = localStorage.getItem("isLogged");
  const [messaggio, setMessaggio] = useState("");
  const [prodotti, setProdotti] = useState([]);

  // Carica i prodotti dal JSON quando la pagina si apre
  useEffect(() => {
    setProdotti(catalogoData.prodotti);
  }, []);

  // Aggiunge un prodotto al carrello
  const aggiungiAlCarrello = (prodotto) => {
    // Prendi il carrello dal localStorage
    const carrelloSalvato = localStorage.getItem("carrello");
    let carrello = [];
    if (carrelloSalvato) {
      carrello = JSON.parse(carrelloSalvato);
    }

    // Cerca se il prodotto è già nel carrello
    let prodottoTrovato = false;
    for (let i = 0; i < carrello.length; i++) {
      if (carrello[i].id === prodotto.id) {
        carrello[i].quantita = carrello[i].quantita + 1;
        prodottoTrovato = true;
        break;
      }
    }

    // Se non è stato trovato, aggiungilo
    if (!prodottoTrovato) {
      const nuovoProdotto = {
        id: prodotto.id,
        nome: prodotto.nome,
        prezzo: prodotto.prezzo,
        categoria: prodotto.categoria,
        immagine: prodotto.immagine,
        materiale: prodotto.materiale,
        dimensioni: prodotto.dimensioni,
        peso: prodotto.peso,
        disponibilita: prodotto.disponibilita,
        quantita: 1
      };
      carrello.push(nuovoProdotto);
    }

    // Salva il carrello aggiornato
    localStorage.setItem("carrello", JSON.stringify(carrello));

    // Mostra messaggio di conferma
    setMessaggio("✅ " + prodotto.nome + " aggiunto al carrello!");
    setTimeout(() => setMessaggio(""), 3000);
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
              <p><strong>Dimensioni:</strong> {prodotto.dimensioni}</p>
              <p><strong>Peso:</strong> {prodotto.peso} kg</p>
              <p className={prodotto.disponibilita > 50 ? "disponibilita" : "disponibilita-bassa"}>
                {prodotto.disponibilita > 0 
                  ? "✅ " + prodotto.disponibilita + " disponibili"
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
