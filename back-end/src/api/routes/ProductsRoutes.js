const router = require('express').Router();
const ProductsController = require('../controller/ProductsController');

router.get('/', ProductsController.getAllProducts);

module.exports = router;
