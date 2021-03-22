var express = require('express');
var router = express.Router();
const outputData = require('../public/output_mis_data')

router.get('/', function(req, res, next) {
  return res.send(outputData)
});

module.exports = router;