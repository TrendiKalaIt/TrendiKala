const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const productController = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');

// Create product
router.post('/', upload.array('media', 5), productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);
    
//  SEARCH ROUTE BEFORE /:id
router.get('/search', productController.searchProducts);

// Get single product by ID
router.get('/:id', productController.getProduct);

// Update product
router.patch('/:id', upload.array('media', 5), productController.updateProduct);

// Delete product
router.delete('/:id', productController.deleteProduct);

// Add product review
router.post('/:id/reviews', protect, productController.addProductReview);

module.exports = router;
