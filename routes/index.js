var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/campaign', function(req, res, next) {
  res.render('campaign', {page:'Campaign', menuId:'campaign'});
});

module.exports = router;
