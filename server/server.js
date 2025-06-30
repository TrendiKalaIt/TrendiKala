const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');

const app = express();

const cors = require('cors');
app.use(cors());


dotenv.config();



// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDb();

app.use('/api/auth', require('./routes/userRoutes'));


// Root route
app.get('/', (req, res) => {
  res.send(' API is working hello');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
