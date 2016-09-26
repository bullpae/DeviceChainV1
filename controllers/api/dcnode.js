var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.get('/dcnode', function (req, res, next) {
  var node = ScaleChain.NodeController;
  console.log(req)
  console.log("sgfddd module test");
  
  console.log(res)

  var token = 'c46acd3fcf06167b81b62f5c1dd6c14b84a7b5c3' // req.body.config.access_token;
  node.list('mainnet', token, function(err, res, req) {
    console.log(res);
    console.log(req);
  });
})

module.exports = router