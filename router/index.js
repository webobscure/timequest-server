const Router = require('express').Router();

const router = new Router();

router.post('/signup');
router.post('/auth');
router.post('/logout');
router.get('/activate/:link');
router.get('/refresh');
router.get('/users');

module.exports = router;
