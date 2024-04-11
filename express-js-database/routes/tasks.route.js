const { Router } = require('express');
const router = Router();

const tasksController = require('../src/controllers/tasks.controller');
const taskMiddleware = require('../src/middlewares/task.middleware');

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getOneById);
router.post('/create', taskMiddleware.verifyCreateRequest, tasksController.create);
router.put('/update/:id', tasksController.update);
router.delete('/delete/:id', tasksController.remove);

module.exports = router;