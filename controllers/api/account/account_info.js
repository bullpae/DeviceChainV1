var router = require('express').Router()
var AccountInfo = require('../../../models/account_info')

router.get('/account_info/:userid', function (req, res, next) {
  console.log("account_info get 1 %s", req.params.userid)
  
  AccountInfo.find({userid: req.params.userid})
  .sort('-date')
  .exec(function (err, account) {
    if (err) { return next(err) }
    console.log(account)
    res.json(account)
    console.log("get account info %s", account.accountid)
  })
})

// router.get('/account_info', function (req, res, next) {
//   console.log("account_info get 1")
  
//   AccountInfo.find()
//   .sort('-date')
//   .exec(function (err, account_list) {
//     if (err) { return next(err) }
//     res.json(account_list)
//   })
// })

router.post('/account_info', function (req, res, next) {
  console.log("account_info post 1: %s", req.body.userid)
  console.log(req.body)

  var account = new AccountInfo()
  account.userid = req.body.userid
  account.accountname = req.body.account.name
  account.comment = req.body.account.identifier
  account.accountid = req.body.account._id
  account.createdate = req.body.account.created_at

  console.log("save info %s %s %s", account.accountname, account.option, account.accountid)

  account.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.delete('/account_info/:accountid', function (req, res, next) {
  console.log("account_info delete 1 %s", req.params.accountid)
  console.log(req.params)
  // todo: get scalechain account and merge info and save

  console.log("delete info %s", req.params.accountid)

  AccountInfo.remove ({accountid: req.params.accountid}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router