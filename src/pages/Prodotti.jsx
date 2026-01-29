import './Prodotti.css';


const Prodotti = () => {
  const isLogged = localStorage.getItem("isLogged");

  return (
    <div className="container mt-4">
      <h1>Prodotti</h1>

      <button disabled={!isLogged}>
        {isLogged ? "Aggiungi al carrello" : "Accedi per acquistare"}
      </button>
    </div>
  );
};

export default Prodotti;
