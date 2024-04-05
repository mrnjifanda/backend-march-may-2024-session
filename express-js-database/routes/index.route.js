const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');

router.get('/', indexController.index);

module.exports = router;