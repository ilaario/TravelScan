require('dotenv').config();
const { Pool } = require('pg');

// Verifica in console il tipo e il valore di tutte le variabili
console.log('DB_USER type/value:', typeof process.env.DB_USER, process.env.DB_USER);
console.log('DB_PASSWORD type/value:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD);
console.log('DB_HOST type/value:', typeof process.env.DB_HOST, process.env.DB_HOST);
console.log('DB_PORT type/value:', typeof process.env.DB_PORT, process.env.DB_PORT);
console.log('DB_NAME type/value:', typeof process.env.DB_NAME, process.env.DB_NAME);
console.log('DATABASE_URL type/value:', typeof process.env.DATABASE_URL, process.env.DATABASE_URL);

let poolConfig;
if (process.env.DATABASE_URL) {
    // se usi DATABASE_URL
    poolConfig = { connectionString: process.env.DATABASE_URL };
} else {
    // altrimenti usa i singoli campi
    poolConfig = {
        user:     String(process.env.DB_USER),
        host:     String(process.env.DB_HOST),
        database: String(process.env.DB_NAME),
        password: String(process.env.DB_PASSWORD),   // forza string
        port:     Number(process.env.DB_PORT)
    };
}

const pool = new Pool(poolConfig);

module.exports = pool;
