# Specifiche Progetto: Mappa di Collegamenti per Aeroporti e Stazioni

## 1. Obiettivo

Realizzare un sito web interattivo che mostri su una mappa le rotte raggiungibili da un punto di partenza (aeroporto o stazione). Per ogni destinazione disponibile, verrà visualizzato il prezzo minimo per quel viaggio.

## 2. Funzionalità Principali

1. Selezione Partenza
    - Drop-down o campo di ricerca per scegliere un aeroporto o una stazione.
    - Pulsante di conferma che aggiorna la mappa.
2. Visualizzazione Mappa
    - Mappa interattiva (zoom, pan).
    - Marker per tutte le destinazioni raggiungibili.
3. Prezzi Minimi
    - Sui marker o in tooltip/pop-up vengono mostrati i prezzi più bassi disponibili per la tratta selezionata.
    -Differenziazione visiva tra tratte aeree e ferroviarie.
4. Filtri Avanzati (opzionale)
    - Filtrare per fascia di prezzo, durata, compagnia aerea o operatore ferroviario.
    - Visualizzazione di offerte speciali o voli diretti.

## 3. Architettura Tecnica

### 3.1 Frontend
- **Framework**: React (Next.js) o Vue.js
- **Mappa**: Leaflet.js con Tiles di OpenStreetMap, oppure Mapbox GL
- **Styling**: Tailwind CSS o Material UI

### 3.2 Backend
- **Server**: Node.js con Express o NestJS
- **API di Voli**: integrazione con Amadeus API / Skyscanner API per recupero rotte e tariffe.
- **API Treni**: integrazione con API Trenitalia / Rail API (Railway API) per orari e tariffe.
- **Database**: PostgreSQL per cache dei risultati e geolocalizzazione di aeroporti e stazioni.
- **Cache**: Redis per memorizzare le ricerche frequenti e ridurre latenza.

### 3.3 Flusso Dati
1. Utente seleziona la partenza.
2. Frontend invia richiesta al backend.
3. Backend:
    - Cerca in cache (Redis) i risultati per quella partenza.
    - Se non presenti, chiama le API esterne per rotte e tariffe.
    - Elabora il prezzo minimo per ogni destinazione.
    - Salva in cache e nel DB.
    - Restituisce JSON con lista destinazioni, coordinate e prezzo.
    - Frontend popola la mappa con marker e pop-up.

## 4. Database Schema (esempio)

```
CREATE TABLE airports (
  id SERIAL PRIMARY KEY,
  iata_code VARCHAR(3) UNIQUE,
  name TEXT,
  latitude FLOAT,
  longitude FLOAT
);

CREATE TABLE stations (
  id SERIAL PRIMARY KEY,
  code VARCHAR(10) UNIQUE,
  name TEXT,
  latitude FLOAT,
  longitude FLOAT
);

CREATE TABLE fares (
  id SERIAL PRIMARY KEY,
  origin_type VARCHAR(10), -- 'airport'|'station'
  origin_code VARCHAR(10),
  dest_type VARCHAR(10),
  dest_code VARCHAR(10),
  min_price NUMERIC,
  last_checked TIMESTAMP
);
```

## 5. Wireframe UI (descrizione)
- Header con logo e selettore di partenza.
- Mappa a piena pagina.
- Panel laterale (opzionale) con lista riassuntiva delle destinazioni ordinate per prezzo.

## 6. Considerazioni Finali
- **Scalabilità**: uso di microservizi per separare voli e treni.
- **Performance**: caching e paging dei dati.
- **Internazionalizzazione**: supporto multi-lingua tramite i18n.