import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '';

export async function fetchAirports() {
    const res = await axios.get(`${API_URL}/api/airports`);
    return res.data.map(a => ({
        code: a.iata_code,
        name: a.name,
        city: a.city,
        country: a.country,
        latitude: a.latitude,
        longitude: a.longitude
    }));
}

export async function fetchStations() {
    const res = await axios.get(`${API_URL}/api/stations`);
    return res.data.map(s => ({
        code: s.uic_code,
        name: s.name,
        city: s.city,
        country: s.country,
        latitude: s.latitude,
        longitude: s.longitude
    }));
}

/**
 * type: 'airport' | 'station'
 * originCode: iata_code o uic_code
 */
export async function fetchDestinations(type, originCode) {
    const res = await axios.get(`${API_URL}/api/destinations`, {
        params: { type, origin: originCode }
    });
    return res.data.map(d => ({
        code:
            type === 'airport'
                ? d.destination_airport_iata
                : d.destination_station_uic,
        name: d.name,
        city: d.city,
        country: d.country,
        latitude: d.latitude,
        longitude: d.longitude,
        price: d.price,
        currency: d.currency
    }));
}
