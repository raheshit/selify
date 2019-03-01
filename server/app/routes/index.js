var express = require('express');
var router = express.Router();
const SiteController=require('app/controllers/SiteController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Site Controller */
router.get('/site',SiteController.index);

module.exports = router;
