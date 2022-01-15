const router = require('express').Router();
const SellerController = require('../controller/SellerController');

router.get('/orders/', SellerController.getSalesBySeller);

module.exports = router;
