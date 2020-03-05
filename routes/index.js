var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});

router.get('/v2/index', function(req, res, next) {
  const index = require('../src/controllers/v2/IndexController');
  let IndexController = new index(req, res);
  IndexController.execute();
});

module.exports = router;
