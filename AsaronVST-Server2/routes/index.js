var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/:source/devices', require('./audio/source/devices'));
router.use('/:source/hosts', require('./audio/source/hosts'));

module.exports = router;
