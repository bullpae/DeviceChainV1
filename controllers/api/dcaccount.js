var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');

router.post('/dcaccount', function (req, res, next) {
  console.log("start dcaccount post 1")
  console.log(req.body)
  console.log("end dcaccount post 1")

  var account = ScaleChain.AccountController;
  account.create({"name":req.body.accountname, "identifier":req.body.comment}, function(err, response, request) {
    if (err) { return next(err) }
    console.log(response);
    // res.status(201).json(respons)
    res.send(response)
    return response
  });
})

router.delete('/dcaccount/:accountid', function (req, res, next) {
  console.log("dcaccount delete 1 %s", req.params.accountid)
  console.log(req.params)

  var account = ScaleChain.AccountController;
  account.delete(req.params.accountid, function(err, response, request) {
    if (err) { return next(err) }
    console.log(response);
    // res.status(201).json(respons)
    res.send(response)
    return response;
  });
})

module.exports = router