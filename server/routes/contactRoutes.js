const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

// Contact form submission
router.post('/', sendMessage);

// Optional: Test route
router.get('/test', (req, res) => {
  res.send('Contact route test successful');
});

module.exports = router;
