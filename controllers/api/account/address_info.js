var router = require('express').Router()
var AccountInfo = require('../../../models/account_info')

router.post('/address_info/:userid', function (req, res, next) {
  console.log("put address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var Accounts = new AccountInfo()
  Accounts.update({userid: req.params.userid}, { $set: req.body }, 
  function(err, account) {
    console.log("start update address ")
    console.log(account)
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
    // if(!account.n) return res.status(404).json({ error: 'account not found' })
    // res.json( { message: 'account updated' } )
  })
})

router.delete('/address_info/:userid', function (req, res, next) {
  console.log("delete address_info post 1: %s", req.params.userid)
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var Accounts = new AccountInfo()
  Accounts.update({userid: req.params.userid}, { $set: req.body }, 
  function(err, account) {
    console.log("start update address ")
    console.log(account)
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
    // if(!account.n) return res.status(404).json({ error: 'account not found' })
    // res.json( { message: 'account updated' } )
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