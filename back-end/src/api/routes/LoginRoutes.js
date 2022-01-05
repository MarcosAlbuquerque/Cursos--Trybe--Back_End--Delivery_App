const router = require('express').Router();
const LoginController = require('../controller/LoginController');
const { loginValidation } = require('../middlewares/loginValidations');

router.post('/', loginValidation, LoginController.login);

module.exports = router;
