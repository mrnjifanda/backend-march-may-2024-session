const { Router } = require('express');
const router = Router();

const authController = require('../src/controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/confirm-email', authController.confirmEmail);

module.exports = router;
