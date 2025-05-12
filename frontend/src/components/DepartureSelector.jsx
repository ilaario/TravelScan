import React from 'react';

export default function DepartureSelector({
                                              airports,
                                              stations,
                                              originType,
                                              onOriginTypeChange,
                                              onOriginSelect
                                          }) {
    const list = originType === 'airport' ? airports : stations;

    return (
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
                <label>
                    Tipo:
                    <select
                        value={originType}
                        onChange={e => {
                            onOriginTypeChange(e.target.value);
                            onOriginSelect(null);
                        }}
                        style={{ marginLeft: '0.5rem' }}
                    >
                        <option value="airport">Aeroporto</option>
                        <option value="station">Stazione</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Partenza:
                    <select
                        value={origin?.code || ''}
                        onChange={e => {
                            const code = e.target.value;
                            const sel = list.find(item => item.code === code) || null;
                            onOriginSelect(sel);
                        }}
                        style={{ marginLeft: '0.5rem' }}
                    >
                        <option value="">-- Seleziona --</option>
                        {list.map(item => (
                            <option key={item.code} value={item.code}>
                                {item.name} ({item.code})
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        </div>
    );
}
