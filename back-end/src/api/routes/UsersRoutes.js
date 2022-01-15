const router = require('express').Router();
const UserController = require('../controller/UsersController');

const tokenValidation = require('../middlewares/TokenValidation');
const registerValidation = require('../middlewares/RegisterValidation');

const validations = [tokenValidation, registerValidation];

router.get('/sellers', UserController.getAllSellers);
router.get('/orders/', UserController.getOrdersByUserId);
router.post('/register', registerValidation, UserController.createUser);
router.post('/create', validations, UserController.createUser);
router.put('/:userId', tokenValidation, UserController.updateUser);
router.get('/', UserController.getAllUsers);

module.exports = router;
