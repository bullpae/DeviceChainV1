var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.post('/account/send', function (req, res, next) {
  console.log('account.js exe accountid: %s', req.body.account_info.accountid)
  console.log('account.js exe public_key: %s', req.body.device.public_key)
  console.log(req.body)
  
  var account = ScaleChain.AccountController;
  var account_id = req.body.account_info.accountid
  var amount = req.body.amount
  var to_address = req.body.device.public_key
  var network = 'testnet'
  
  account.sendCoin(account_id, amount, to_address, network, function(err, response, request) {
    console.log(err)
    if (err) { return next(err) }
    console.log(response);
    res.json(response)
    // return response
  });
})

// curl https://api.scalechain.io/v1/accounts/send \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"account_id":"8aJ3PdRorDQCsXJBw", "to_address":"1MTBHapDaCj9eKTa7zFGGAwo7mCDPyAZar", "amount":500000}' \
//   -X POST

module.exports = router