const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./src/routes/categoryRoutes');
const productRoutes = require('./src/routes/productRoutes');
const { initDB } = require('./src/config/db');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

// Initialize DB and start server
initDB().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Productos microservice running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to initialize database:', err);
});