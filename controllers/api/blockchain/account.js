var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.get('/account/:deviceid', function (req, res, next) {
  console.log('account.js exe start: %:', req.params.deviceid)
  
  var address = ScaleChain.AddressController;
  var account_id = req.body.account_info.accountid
  var amount = 0.1
  var to_address = req.body.device.public_key
  var network = "testnet"
  account.sendCoin(account_id, amount, to_address, network, function(err, response, request) {
    console.log(response);
    res.send(response)
    return response
  });

  console.log('account.js exe end')
})

// curl https://api.scalechain.io/v1/accounts/send \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"account_id":"8aJ3PdRorDQCsXJBw", "to_address":"1MTBHapDaCj9eKTa7zFGGAwo7mCDPyAZar", "amount":500000}' \
//   -X POST

module.exports = router