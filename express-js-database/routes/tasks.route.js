const { Router } = require('express');
const router = Router();

const tasksController = require('../src/controllers/tasks.controller');

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getOneById);
router.post('/create', tasksController.create);
router.put('/update/:id', tasksController.update);
router.delete('/delete/:id', tasksController.remove);

module.exports = router;