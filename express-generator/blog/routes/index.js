var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const query = req.query.name || null;
  res.render('index', {
    title: 'Express',
    description: "Hello seven academy",
    query: query
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About page' });
});

router.post('/about', function(req, res, next) {

  const body = req.body;
  console.log(body);
  res.redirect('/?name=' + body.name);
})

router.post('/save-user', function (req, res, next) {

  const body = req.body;
  console.log(body);
});

module.exports = router;
