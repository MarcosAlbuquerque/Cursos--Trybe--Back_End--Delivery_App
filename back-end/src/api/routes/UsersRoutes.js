const router = require('express').Router();
const UserController = require('../controller/UsersController');

const tokenValidation = require('../middlewares/TokenValidation');

router.get('/', tokenValidation, UserController.getAllUsers);
router.post('/register', UserController.createUser);
router.put('/:userId', tokenValidation, UserController.updateUser);

module.exports = router;
