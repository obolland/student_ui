var express = require('express');
var router = express.Router();
const outputData = require('../public/output_mis_data')

router.get('/', function(req, res, next) {
    const searchCriteria = req.body.search;
    const searchResult = (searchCriteria) => {
    return outputData.filter(obj => Object.values(obj).includes(searchCriteria));
    }
  return res.send(searchResult(searchCriteria))
});

module.exports = router;