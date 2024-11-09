const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator')

router.post('/signup',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32}),
    userController.registration);
router.post('/auth', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

module.exports = router;
