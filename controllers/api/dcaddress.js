var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.post('/dcaddress', function (req, res, next) {
  console.log('dcaddress.js exe start %s', req.body.accountid)

  var address = ScaleChain.AddressController;
  var accountid = req.body.accountid;
  var network = 'testnet';

  address.create(accountid, network, function(err, response, request) {
    console.log(response);
    res.send(response)
    return res
  });

  console.log('dcaddress.js exe end')
})

router.delete("/dcaddress/:public_key", function (req, res, next) {
  console.log("del address: %s", req.params.public_key)
  
  var address = ScaleChain.AddressController;
  var key= req.params.public_key;
  var network = 'testnet';

  address.delete(key, network, function(err, response, request) {
    res.send(response)
    return res
  });
})

// curl https://api.scalechain.io/v1/addresses/new \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"account_id":"8aJ3PdRorDQCsXJBw", "watch_only":false}' \
//   -X POST
module.exports = router