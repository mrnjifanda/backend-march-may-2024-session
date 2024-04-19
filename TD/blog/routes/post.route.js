const { Router } = require('express');
const router = Router();

const postController = require('../src/controllers/post.controller');

router.get('/', postController.getAll);

module.exports = router;
