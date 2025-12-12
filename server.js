const express = require('express');
const mongoose = require('mongoose');

const categoryRoutes = require('./routes/categoryroutes');
const brandRoutes = require('./routes/brandroutes');
const productRoutes = require('./routes/productroutes');

const app = express();
const PORT = 4000;

app.use(express.json()); // JSON parser

// Routers
app.use('/category', categoryRoutes);
app.use('/brand', brandRoutes);
app.use('/product', productRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/POSdb')
    .then(() => console.log("MongoDB is now Connected!!"))
    .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
