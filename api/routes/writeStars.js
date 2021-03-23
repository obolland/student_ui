var express = require('express');
var router = express.Router();
var fs = require('fs');
const outputData = require('../public/output_mis_data')

router.post('/', function(req, res, next) {
  const stars = req.body.rating;
  const provisionId = req.body.provisionId;

  //find the person object to whom the stars should be awarded
  const result = (provisionId) => {
    return outputData.filter(obj => Object.values(obj).includes(provisionId));
    }
  
  //add the stars to the object
  var data = result(provisionId)
  data[0].SENStarsAwarded = stars;  //add stars variable here
  
  //return all student objects apart from the one above
  var filtered = outputData.filter(obj => !Object.values(obj).includes('1095'));

  //combine all objects into array to overwrite outputData
  var dataToWrite = filtered;
  dataToWrite.push(data[0])
  
  //replace previous outputData array with the new
  

  return res.send('stars written')
});

module.exports = router;