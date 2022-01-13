const router = require('express').Router();
const SalesController = require('../controller/SalesController');

router.post('/customer/sell', SalesController.createSale);

module.exports = router;
