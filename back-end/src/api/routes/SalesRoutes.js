const router = require('express').Router();
const SalesController = require('../controller/SalesController');
const tokenValidation = require('../middlewares/TokenValidation');

router.post('/customer/sell', tokenValidation, SalesController.createSale);

module.exports = router;
