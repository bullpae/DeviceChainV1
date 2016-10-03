var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

var dc_node = ScaleChain.NodeController;

router.get('/apitest', function (req, res, next) {
  console.log("sss module test")

  dc_node.list('mainnet', function(err, res, req) {
    console.log(err);
    console.log(res);
    console.log(req);
  });
//   return dc_node.list();
})

// router.get('/apitest', function (req, res, next) {
//     "api get test!!"
// })

router.post('/apitest', function (req, res, next) {
    "api post test!!"
})

module.exports = router