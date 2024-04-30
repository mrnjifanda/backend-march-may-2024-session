const { Router } = require('express');
const router = Router();

const postController = require('../src/controllers/post.controller');
const authMiddleware = require('../src/middlewares/auth.middleware');

router.get('/', postController.getAll);
router.get('/search', postController.search);

router.get('/user', authMiddleware.verifyAuth, postController.getAllByUserId);
router.post('/user/create', authMiddleware.verifyAuth, postController.create);

router.get('/:id', postController.getOne);


module.exports = router;
