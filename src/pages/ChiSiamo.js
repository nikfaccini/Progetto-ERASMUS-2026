import React from "react";
import "./ChiSiamo.css";

const ChiSiamo = () => {
  return (
    <div className="chi-siamo-container">
      <div className="chi-siamo-header">
        <h1>Chi Siamo</h1>
        <p>
          VerdePal Pallet nasce nel 2014 come una piccola realtà specializzata nella produzione di pallet in legno. 
          Grazie alla qualità dei materiali utilizzati e all'attenzione per le esigenze dei clienti, l'azienda cresce nel tempo 
          aumentando la capacità produttiva, mantenendo sempre una forte attenzione alla sostenibilità e al recupero del legno.
        </p>
      </div>

      <div className="content-section">
        <h2>La Nostra Storia</h2>
        <p>
          Oggi VerdePal Pallet fornisce pallet standard e su misura per aziende di diversi settori, 
          garantendo affidabilità e continuità nel servizio. La nostra esperienza nel settore ci permette 
          di offrire soluzioni personalizzate che rispondono alle specifiche esigenze logistiche di ogni cliente.
        </p>
      </div>

      <div className="content-section">
        <h2>Mission</h2>
        <p>
          Produrre pallet in legno resistenti, sicuri e conformi alle normative, utilizzando materiali di qualità 
          e processi produttivi responsabili. Ridurre gli sprechi, valorizzare il legno riciclato e offrire soluzioni 
          personalizzate per soddisfare le esigenze logistiche dei clienti.
        </p>
      </div>

      <div className="content-section">
        <h2>Vision</h2>
        <p>
          Diventare un punto di riferimento nel settore dei pallet in legno, distinguendosi per l'attenzione all'ambiente, 
          l'affidabilità dei prodotti e la capacità di innovare. L'azienda punta a crescere in modo sostenibile 
          contribuendo a un processo del legno più responsabile e consapevole.
        </p>
      </div>

      <div className="content-section">
        <h2>I Nostri Valori</h2>
        <div className="valori-list">
          <div className="valore-item">
            <p>Sostenibilità Ambientale</p>
          </div>
          <div className="valore-item">
            <p>Qualità e Sicurezza</p>
          </div>
          <div className="valore-item">
            <p>Innovazione Produttiva</p>
          </div>
          <div className="valore-item">
            <p>Affidabilità</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
