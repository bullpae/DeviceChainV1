var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.get('/dcnode', function (req, res, next) {
  console.log('dcnode.js exe start')

  var node = ScaleChain.NodeController;
  var config = ScaleChain.configuration; 
  console.log(config)

  node.list('testnet', function(err, resList, reqList) {
    console.log('dcnode.js node.list end')
    res.send(resList)
    return res
  });
  console.log('dcnode.js exe end')
})

// curl https://api.scalechain.io/v1/nodes/list \
//   -H 'Authorization: Bearer dc9f3eb2cf62f4756a4c17f9614fbad292572926' \
//   -H 'Network: mainnet'
module.exports = router