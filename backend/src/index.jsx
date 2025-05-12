require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const apiRoutes = require('./routes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('🌍 Travel Map API up and running'));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});
