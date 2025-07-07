const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); 

const productController = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');


// POST – Create product with image/video uploads
router.post('/', upload.array('media', 5), productController.createProduct);

// GET – All products
router.get('/', productController.getAllProducts);

// // GET – Product stats
// router.get('/stats', productController.getProductStats);

// GET – Single product by ID
router.get('/:id', productController.getProduct);

// PATCH – Update product by ID (optional: add upload middleware here too)
router.patch('/:id', upload.array('media', 5), productController.updateProduct);

// DELETE – Delete product by ID
router.delete('/:id', productController.deleteProduct);


router.post('/:id/reviews', protect, productController.addProductReview);

module.exports = router;
