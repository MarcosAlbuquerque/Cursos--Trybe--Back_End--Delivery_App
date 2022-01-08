const router = require('express').Router();
const ProductsController = require('../controller/ProductsController');

router.get('/products', ProductsController.getAllProducts);
router.get('/images/:productName', ProductsController.getProductImage);

module.exports = router;
