const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const connectDb = require('./config/db');
const { connectCloudinary } = require('./config/cloudinary');
const cors = require('cors');

// Route imports
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const addressRoutes = require('./routes/addressRoutes');
const contactRoutes = require('./routes/contactRoutes');


const app = express(); // Initialize Express

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDb();

// Connect to Cloudinary
connectCloudinary();

// Mount API Routes
app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/contact', contactRoutes);


// Test POST route
app.post('/test', (req, res) => {
  res.send('POST request received');
});

// Root route
app.get('/', (req, res) => {
  res.send('API is working hello');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
