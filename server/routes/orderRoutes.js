
const express = require('express');
const router = express.Router();

const { placeOrder, guestPlaceOrder, getMyOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Logged-in user order
router.post('/place', authMiddleware, placeOrder);


// Guest user order (no auth middleware)
router.post('/guest-place-order', guestPlaceOrder);

//get orders for logged-in user
router.get('/my-orders', authMiddleware, getMyOrders);


module.exports = router;
