const router = require('express').Router();
const SalesController = require('../controller/SalesController');
const tokenValidation = require('../middlewares/TokenValidation');

router.get('/:id', SalesController.getSaleDetailsById);
router.post('/', tokenValidation, SalesController.createSale);

module.exports = router;
