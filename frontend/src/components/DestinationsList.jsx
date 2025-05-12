import React from 'react';

export default function DestinationsList({ destinations }) {
    if (!destinations.length) {
        return <p>Nessuna destinazione da mostrare.</p>;
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {destinations.map(dest => (
                <li key={dest.code} style={{ marginBottom: '0.5rem' }}>
                    <strong>
                        {dest.name} ({dest.code})
                    </strong>
                    <br />
                    {dest.city}, {dest.country}
                    <br />
                    Prezzo minimo: {dest.price} {dest.currency}
                </li>
            ))}
        </ul>
    );
}
