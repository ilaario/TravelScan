import React, { useState, useEffect } from 'react';
import DepartureSelector from './components/DepartureSelector';
import DestinationsList from './components/DestinationsList';
import MapView from './components/MapView';
import {
    fetchAirports,
    fetchStations,
    fetchDestinations
} from './services/api';

function App() {
    const [airports, setAirports] = useState([]);
    const [stations, setStations] = useState([]);
    const [originType, setOriginType] = useState('airport');
    const [origin, setOrigin] = useState(null);
    const [destinations, setDestinations] = useState([]);

    // Carica liste di aeroporti e stazioni all'avvio
    useEffect(() => {
        fetchAirports().then(setAirports);
        fetchStations().then(setStations);
    }, []);

    // Ogni volta che cambio partenza, ricarico le destinazioni
    useEffect(() => {
        if (origin) {
            fetchDestinations(originType, origin.code).then(setDestinations);
        } else {
            setDestinations([]);
        }
    }, [originType, origin]);

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Travel Map</h1>
            <DepartureSelector
                airports={airports}
                stations={stations}
                originType={originType}
                onOriginTypeChange={setOriginType}
                onOriginSelect={setOrigin}
            />
            <div style={{ display: 'flex', marginTop: '1rem' }}>
                <MapView origin={origin} destinations={destinations} />
                <div style={{ flex: 1, marginLeft: '1rem', overflowY: 'auto', maxHeight: '600px' }}>
                    <DestinationsList destinations={destinations} />
                </div>
            </div>
        </div>
    );
}

export default App;
