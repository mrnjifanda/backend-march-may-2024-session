
const express = require('express');
const router = express.Router();

router.get('/create', function(req, res, next) {
  res.render('dashboard/project/create');
});

router.get('/edit/:id', function(req, res, next) {
  res.render('dashboard/project/edit');
});

router.get('/:id', function(req, res, next) {
  res.render('dashboard/project/detail');
});

router.get('/:id/tasks', function(req, res, next) {
  res.render('dashboard/project/tasks');
});

module.exports = router;