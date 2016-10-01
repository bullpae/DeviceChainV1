var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');
var authinfo = require('../../models/dcauth.info')

router.post('/dcserver', function (req, res, next) {
  console.log("dcserver post 1")

  var config = ScaleChain.configuration;
  console.log("a_token %s r_token %s", config.oAuthAccessToken, config.oAuthRefreshToken)

  var account = ScaleChain.AccountController;
  account.create({"name":req.body.servername, "identifier":req.body.option}, function(err, response, request) {
    if (err) { return next(err) }
    console.log(response);
    // res.status(201).json(respons)
    res.send(response)
    return response
  });
})

router.delete('/dcserver/:serverid', function (req, res, next) {
  console.log("dcserver delete 1 %s", req.params.serverid)
  console.log(req.params)
  console.log("dcserver delete 1 %s", req.params.serverid)

  var config = ScaleChain.configuration;
  console.log("a_token %s r_token %s", config.oAuthAccessToken, config.oAuthRefreshToken)

  var account = ScaleChain.AccountController;
  account.delete(req.params.serverid, function(err, response, request) {
    if (err) { return next(err) }
    console.log(response);
    // res.status(201).json(respons)
    res.send(response)
    return response;
  });
})

module.exports = router