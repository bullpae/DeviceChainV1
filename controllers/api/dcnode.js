var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.get('/dcnode', function (req, res, next) {
  var node = ScaleChain.NodeController;

//   var token = 'dc9f3eb2cf62f4756a4c17f9614fbad292572926' // req.body.config.access_token;
  node.list('mainnet', function(error, response, request) {
    console.log(response);
    console.log(request);
  });
})

// curl https://api.scalechain.io/v1/nodes/list \
//   -H 'Authorization: Bearer dc9f3eb2cf62f4756a4c17f9614fbad292572926' \
//   -H 'Network: mainnet'
module.exports = router