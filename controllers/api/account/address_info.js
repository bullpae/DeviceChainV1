var router = require('express').Router()
var AccountInfo = require('../../../models/account_info')

router.post('/address_info/:userid', function (req, res, next) {
  console.log("put address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var Accounts = new AccountInfo()
  var conditions = { userid: req.params.userid }
  var update = { $set: { 
      get_address: "true", 
      public_key: req.body.public_key, 
      asset_address: req.body.asset_address,
      watch_only: req.body.watch_only,
      network: req.body.network, 
      certstatus: "false",
      createdate_addr: req.body.created_at }
  }
  // var update = req.body
  AccountInfo.findOneUpdate(conditions, update, 
  function(err) {
    console.log("start update address ")
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.delete('/address_info/:userid', function (req, res, next) {
  console.log("delete address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var Accounts = new AccountInfo()
  var conditions = { userid: req.params.userid }
  var update = { $set: { 
      get_address: "false", 
      public_key: "", 
      asset_address: "",
      watch_only: "",
      network: "", 
      certstatus: "",
      createdate_addr: "" }
  }
  AccountInfo.findOneUpdate(conditions, update, 
  function(err) {
    console.log("start delete address ")
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
  })
  
  // Accounts.findById(req.params.userid, function(err, account) {
  //   account.public_key = ""
  //   account.asset_address = ""
  //   account.watch_only = ""
  //   account.network = ""
  //   account.certstatus = ""  
  //   account.createdate_addr = ""    
    
  //   console.log("delete address info:")
  //   console.log(account)
  //   console.log("lll delete address info")

  //   account.save(function (err) {
  //     if (err) { return next(err) }
  //     res.sendStatus(201)
  //   })
  // })
})

module.exports = router