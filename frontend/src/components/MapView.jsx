import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ origin, destinations }) {
    const defaultCenter = [20, 0]; // al caricamento
    const center = origin
        ? [origin.latitude, origin.longitude]
        : defaultCenter;
    const zoom = origin ? 4 : 2;

    return (
        <div style={{ width: '70%', height: '600px' }}>
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {origin && (
                    <Marker position={[origin.latitude, origin.longitude]}>
                        <Popup>
                            Partenza: {origin.name} ({origin.code})
                        </Popup>
                    </Marker>
                )}

                {destinations.map(dest => (
                    <Marker
                        key={dest.code}
                        position={[dest.latitude, dest.longitude]}
                    >
                        <Popup>
                            {dest.name} ({dest.code})
                            <br />
                            Prezzo: {dest.price} {dest.currency}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
