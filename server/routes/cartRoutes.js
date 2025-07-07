// routes/cart.routes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  getUserCart,
  addToCart,
  updateCartItem,
  removeCartItem,
  clearCart
} = require('../controllers/cartController');

router.use(protect);

router.get('/', getUserCart);
router.post('/', addToCart);
router.put('/:itemId', updateCartItem);
router.delete('/:itemId', removeCartItem);
router.delete('/', clearCart); 

module.exports = router;
