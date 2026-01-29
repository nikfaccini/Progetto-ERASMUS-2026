import React from "react";
import "./ChiSiamo.css";

const ChiSiamo = () => {
  return (
    <div className="container">
      <h1>Chi Siamo</h1>

      <p>
        VerdePal Pallet nasce nel 2014 come una piccola realtà specializzata nella produzione di pallet in legno. 
        Grazie alla qualità dei materiali utilizzati e all’attenzione per le esigenze dei clienti, l’azienda cresce nel tempo aumentando la capacità produttiva. 
        Mantiene sempre una forte attenzione alla sostenibilità e al recupero del legno. Oggi VerdePal Pallet fornisce pallet standard e su misura per aziende di diversi settori, garantendo affidabilità e continuità nel servizio.
      </p>

      <div className="mission">
        <h2>Mission</h2>
        <p>
          Produrre pallet in legno resistenti, sicuri e conformi alle normative, utilizzando materiali di qualità e processi produttivi responsabili. 
          Ridurre gli sprechi, valorizzare il legno riciclato e offrire soluzioni personalizzate per soddisfare le esigenze logistiche dei clienti.
        </p>
      </div>

      <div className="mission">
        <h2>Vision</h2>
        <p>
          Diventare un punto di riferimento nel settore dei pallet in legno, distinguendosi per l’attenzione all’ambiente, l’affidabilità dei prodotti e la capacità di innovare. 
          L’azienda punta a crescere in modo sostenibile contribuendo a un processo del legno più responsabile e consapevole.
        </p>
      </div>

      <div className="mission">
        <h2>Valori</h2>
        <ul>
          <li>Sostenibilità ambientale</li>
          <li>Qualità e sicurezza</li>
          <li>Innovazione produttiva</li>
          <li>Affidabilità</li>
        </ul>
      </div>
    </div>
  );
};

export default ChiSiamo;
