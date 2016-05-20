var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
/* GET home page. */
var homepageController = function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
}
router.get('/', ctrlMain.index);


module.exports = router;