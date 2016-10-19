var router = require('express').Router()
var AccountInfo = require('../../../models/account_info')

router.post('/address_info', function (req, res, next) {
  console.log("address_info post 1: ")
  console.log(req.body)
  console.log("lll address_info post 1: ")

  var account = new AccountInfo()
  account = req.body.account
  // account.userid = req.body.userid
  // account.accountname = req.body.account.name
  // account.comment = req.body.account.identifier
  // account.accountid = req.body.account._id
  // account.createdate = req.body.account.created_at

  console.log("save info:")
  console.log(account)
  console.log("lll save info")

  account.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})