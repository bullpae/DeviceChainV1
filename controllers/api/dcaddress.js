var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.post('/dcaddress', function (req, res, next) {
  console.log('dcaddress.js exe start %s', req.body.serverid)

  var address = ScaleChain.AddressController;
  var serverid = req.body.serverid;
  var network = 'testnet';

  address.create(serverid, network, function(err, response, request) {
    console.log(response);
    res.send(response)
    return res
  });

  console.log('dcaddress.js exe end')
})

// curl https://api.scalechain.io/v1/addresses/new \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"account_id":"8aJ3PdRorDQCsXJBw", "watch_only":false}' \
//   -X POST
module.exports = router