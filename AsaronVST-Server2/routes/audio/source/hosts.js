const express = require('express');
const router = express.Router();
const portAudio = require('naudiodon');

/* GET Source Devices listing. */
router.get('/', function (req, res, next) {
    res.send(portAudio.getHostAPIs());
});

module.exports = router;
