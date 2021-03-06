var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');
var request = require('request');

router.post('/transaction/signtx', function (req, res, next) {
  var config = ScaleChain.configuration;
  var key = config.oAuthAccessToken
  var data = req.body.trans_ret
  var network = "testnet"
  
  console.log("signtx req data:")
  console.log(req.body)
  
  console.log("signtx test: %s", key)
  console.log(data)
  
  request({
    url: "https://api.scalechain.io/v1/transactions/sign",
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

router.post('/transaction/sendtx', function (req, res, next) {
  var config = ScaleChain.configuration;
  var key = config.oAuthAccessToken
  var data = req.body.send_ret
  var network = "testnet"

  console.log("sendtx req data:")
  console.log(req.body)
  
  console.log("sendtx test: %s", key)
  console.log(data)
  
  request({
    url: "https://api.scalechain.io/v1/transactions/send",
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

router.post('/transaction/sign', function (req, res, next) {
  console.log('transaction.js sign: %s', req.body.trans_ret.unsigned_tx_hex)
  console.log(req.body.trans_ret)

  var transaction = ScaleChain.TransactionController;
  var unsinged_tx_hex = req.body.trans_ret.unsigned_tx_hex
  // var unsinged_tx_hex = new String(req.body.trans_ret.unsigned_tx_hex)
  // var unsinged_tx_hex = "" + req.body.trans_ret.unsigned_tx_hex + ""
  var network = 'testnet'
  console.log(unsinged_tx_hex)
  var strTx = JSON.stringify(unsinged_tx_hex) 
  console.log(strTx)
  
  transaction.signRawTransaction(strTx, network, function(err, response, request) {
    console.log(err)
    if (err) { return next(err) }
    console.log(response);
    res.json(response)
  });
})

router.post('/transaction/send', function (req, res, next) {
  console.log('transaction.js send: %s', req.body.send_ret.singed_tx_hex)
  console.log(req.body.send_ret)

  var transaction = ScaleChain.TransactionController;
  var singed_tx_hex = req.body.send_ret.singed_tx_hex
  // var singed_tx_hex = new String(req.body.send_ret.singed_tx_hex)
  // var singed_tx_hex = "" + req.body.send_ret.singed_tx_hex + ""
  var network = 'testnet'
  console.log(singed_tx_hex)
  var strTx = JSON.stringify(singed_tx_hex) 
  console.log(strTx)
  
  transaction.sendSignedTransaction(strTx, network, function(err, response, request) {
    console.log(err)
    if (err) { return next(err) }
    console.log(response);
    res.json(response)
  });
})

// router.post('/transaction/:deviceid', function (req, res, next) {
//   // 정보 비교하여 정상이면 코인 이동
//   // 트랜잭션 헥사 값을 트랙잭션 서명
//   // 서명한 트랙잭선 블록체인에 전송
// })

// curl https://api.scalechain.io/v1/transactions/sign \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"unsigned_tx_hex": "01000000011da9283b4ddf8d89eb996988b89ead56cecdc44041ab38bf787f1206cd90b51e0000000000ffffffff01405dc600000000001976a9140dfc8bafc8419853b34d5e072ad37d1a5159f58488ac00000000"}' \
//   -X POST

// curl https://api.scalechain.io/v1/transactions/send \
//   -H 'Authorization: Bearer d36730995975edcad1115b43e13a8c0781394c2c' \
//   -H 'Network: mainnet' \
//   -H 'Content-Type: application/json' \
//   -d '{"signed_tx_hex": "01000000018689302ea03ef5dd56fb7940a867f9240fa811eddeb0fa4c87ad9ff3728f5e11000000006a473044022056da8179dedd3b9b554641d7fc046a25c1a9f453a1d0794204f324684905b9a302206f99e30d71ea4621e4301c69e7db66765fc81944527d4ea03b978f90c7fa954f0121029f50f51d63b345039a290c94bffd3180c99ed659ff6ea6b1242bca47eb93b59fffffffff01983a0000000000001976a914ad618cf4333b3b248f9744e8e81db2964d0ae39788ac00000000"}' \
//   -X POST

module.exports = router