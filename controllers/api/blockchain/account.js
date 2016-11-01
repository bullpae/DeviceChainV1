var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');
var request = require('request');

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

router.post('/account/sendtx', function (req, res, next) {
  var config = ScaleChain.configuration;
  var key = config.oAuthAccessToken
  
  var data = "{\"account_id\":\"" + req.body.accountid + "\", \"to_address\":\"" + req.body.public_key + "\", \"amount\":" + req.body.amount + "}"
  var network = "testnet"
  
  console.log("sendtx req data:")
  console.log(req.body)
  
  console.log("sendtx test: %s", key)
  console.log(data)
  
  request({
    url: "https://api.scalechain.io/v1/accounts/send",
    method: "POST",
    headers: {
      "Authorization": "Bearer " + key, 
      "Network": network,
      "content-type": "application/json",  // <--Very important!!!
    },
    body: data
  }, function (err, response, body){
    console.log(err);
    console.log(body);
    
    if (err) { return next(err) }
    res.json(body)
  })
})

// curl https://api.scalechain.io/v1/accounts/send \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"account_id":"8aJ3PdRorDQCsXJBw", "to_address":"1MTBHapDaCj9eKTa7zFGGAwo7mCDPyAZar", "amount":500000}' \
//   -X POST

module.exports = router