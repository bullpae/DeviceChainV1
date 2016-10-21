var router = require('express').Router()
var AccountInfo = require('../../../models/account_info')

router.post('/address_info/:userid', function (req, res, next) {
  console.log("put address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var conditions = { userid: req.params.userid }
  // var update = { $set: { 
  //     get_address: "true", 
  //     public_key: req.body.account.public_key, 
  //     asset_address: req.body.account.asset_address,
  //     watch_only: req.body.account.watch_only,
  //     network: req.body.account.network, 
  //     certstatus: "false",
  //     createdate_addr: req.body.account.created_at }
  // }
  var update = { $set: req.body.account }
  AccountInfo.update(conditions, update) 
  .exec(function(err) {
    console.log("start update address ")
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    console.log("end update address ")
    res.sendStatus(201)
    console.log("end ii update address ")
  })
})

router.delete('/address_info/:userid', function (req, res, next) {
  console.log("delete address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  // var Accounts = new AccountInfo()
  var conditions = { userid: req.params.userid }
  AccountInfo.findOne(conditions)
  .exec(function (err, account) {
    console.log(account)
    console.log("account update test!!!")
    if (err) { return next(err) }
    
    console.log("account update test!!!del")
    account.get_address = "false"
    account.public_key =  ""
    account.asset_address = ""
    account.watch_only = ""
    account.network = ""
    account.certstatus = ""
    account.createdate_addr = ""
    
    account.save(function (err, output) {
      if (err) { return next(err) }
      res.send('success');
    })
    return res;
  })
})

module.exports = router