var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

var dc_node = ScaleChain.NodeController;

router.get('/dcnodeex', function (req, res, next) {
  console.log("sss module test")
  return dc_node.list();
})

// dc_node.list('mainnet', function(err, res, req) {
//   console.log(res);
//   return res;
// });

module.exports = dc_node;