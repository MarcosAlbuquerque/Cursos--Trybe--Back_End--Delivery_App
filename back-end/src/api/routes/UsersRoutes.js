const router = require('express').Router();
const UserController = require('../controller/UsersController');

const tokenValidation = require('../middlewares/TokenValidation');
const registerValidation = require('../middlewares/RegisterValidation');

const validations = [tokenValidation, registerValidation];

router.get('/', UserController.getAllUsers);
router.get('/sellers', UserController.getAllSellers);
router.post('/register', registerValidation, UserController.createUser);
router.post('/create', validations, UserController.createUser);
router.put('/:userId', tokenValidation, UserController.updateUser);

module.exports = router;
