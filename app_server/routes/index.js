var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlLocations = require('../controllers/locations.js');
var ctrlOthers = require('../controllers/others.js');

///* GET home page. */
//var homepageController = function (req, res, next) {
//        res.render('index', {
//            title: 'Express'
//        });
//    }
//router.get('/', ctrlMain.index);

//locations pages
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
//Other pages
router.get('/about', ctrlOthers.about);


module.exports = router;