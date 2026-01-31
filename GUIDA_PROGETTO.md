# 🛍️ MyShop - Progetto eCommerce React

## 📋 Descrizione
Questo è un progetto di eCommerce semplice creato con React per la scuola.
Permette di registrarsi, fare login, vedere prodotti, aggiungerli al carrello e fare ordini.

## ✨ Funzionalità

### 🔐 Autenticazione
- **Registrazione**: Crea un account con nome, cognome, email e password
- **Login**: Accedi con le credenziali salvate
- **Logout**: Esci dall'account
- **Protezione route**: Alcune pagine sono accessibili solo se loggati

### 🛒 Shopping
- **Prodotti**: Lista di 6 prodotti tecnologici con prezzi
- **Carrello**: Aggiungi prodotti, modifica quantità, rimuovi articoli
- **Ordini**: Storico degli ordini completati

## 🚀 Come avviare il progetto

1. Apri il terminale nella cartella del progetto
2. Installa le dipendenze (solo la prima volta):
   ```bash
   npm install
   ```
3. Avvia il progetto:
   ```bash
   npm start
   ```
4. Il browser si aprirà automaticamente su `http://localhost:3000`

## 📁 Struttura del Progetto

```
src/
├── components/           # Componenti riutilizzabili
│   ├── Navbar.js        # Barra di navigazione
│   └── ProtectedRoute.js # Protezione pagine riservate
├── pages/               # Pagine dell'applicazione
│   ├── Home.jsx         # Homepage
│   ├── Login.js         # Pagina login
│   ├── Registrazione.js # Pagina registrazione
│   ├── Prodotti.jsx     # Lista prodotti
│   ├── Carrello.jsx     # Carrello acquisti
│   └── Ordini.jsx       # Storico ordini
└── App.js              # Componente principale con routing
```

## 💾 Come funziona il salvataggio dati

Il progetto usa **localStorage** del browser per salvare:

1. **Utente registrato**: `utenteRegistrato`
   - Contiene: nome, cognome, email, password

2. **Stato login**: `isLogged`
   - Valore: "true" se loggato, altrimenti nulla

3. **Carrello**: `carrello`
   - Array di prodotti con quantità

4. **Ordini**: `ordini`
   - Array di tutti gli ordini completati

> ⚠️ **Nota**: I dati vengono salvati solo nel browser. Se cancelli i dati del browser o cambi browser, perderai tutto.

## 🎯 Flusso dell'applicazione

### Per un nuovo utente:
1. Apri l'app → Vedi la Homepage
2. Clicca "Registrati"
3. Compila il form di registrazione
4. Vieni reindirizzato al Login
5. Fai login con le credenziali appena create
6. Ora puoi vedere tutti i prodotti e aggiungere al carrello

### Fare un acquisto:
1. Vai su "Prodotti"
2. Clicca "Aggiungi al carrello" sui prodotti che ti interessano
3. Vai su "Carrello"
4. Modifica le quantità se necessario
5. Clicca "Procedi con l'ordine"
6. L'ordine viene salvato in "Ordini"

## 🔧 Problemi comuni

**Il progetto non parte?**
- Controlla di aver fatto `npm install`
- Verifica che Node.js sia installato: `node --version`

**Non riesco a fare login?**
- Assicurati di esserti registrato prima
- Usa le stesse credenziali della registrazione

**Il carrello è vuoto dopo il logout?**
- È normale! Il carrello viene svuotato al logout per sicurezza

**Gli ordini sono spariti?**
- Controlla di non aver cancellato i dati del browser
- Gli ordini sono salvati nel localStorage

## 🎨 Personalizzazioni possibili

Puoi facilmente:
- Aggiungere più prodotti in `Prodotti.jsx`
- Cambiare i colori nei file `.css`
- Aggiungere nuove funzionalità
- Migliorare la validazione dei form

## 📚 Tecnologie usate

- **React** 19 - Libreria per l'interfaccia
- **React Router** - Navigazione tra pagine
- **localStorage** - Salvataggio dati nel browser
- **CSS3** - Stile dell'applicazione

## 👨‍💻 Autore

Progetto creato per il corso ITIS - 4° anno

---

**Buon divertimento! 🎉**
