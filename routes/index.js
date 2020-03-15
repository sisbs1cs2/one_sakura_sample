var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let param = {page:'ホーム', menuId:'home', price: 1111, use: '123'};
  res.render('index', param);
});

router.get('/campaign', function(req, res, next) {
  res.render('campaign', {page:'キャンペーン', menuId:'campaign', price1: 6123, price2: 5987, price3: 5555, price4:4567});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About', menuId:'about'});
});

router.get('/index', function(req, res, next) {
  const index = require('../src/controllers/v2/IndexController');
  let IndexController = new index(req, res);
  IndexController.execute();
});

router.get('/campaign2', function(req, res, next) {
  const campaign = require('../src/controllers/v2/CampaignController');
  let CampaignController = new campaign(req, res);
  CampaignController.execute();
});

module.exports = router;
