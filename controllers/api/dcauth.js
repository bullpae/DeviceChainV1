var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');
var authinfo = require('../../models/dcauth.info')

router.get('/dcauth', function (req, res, next) {
  console.log("dcauth module test")

  var key = "02319fc69cba81a49dd824a0141e49afb3752b9398948cf2644b0aedd282376e96";
  var secret = "ef0d0e512109887be95556970711d010bc684bd24b97d050430a17e49a70bd43";

  var config = ScaleChain.configuration;
  var auth = ScaleChain.AuthorizationController;

  auth.getAccessTokenByClientCredential(key, secret, function(err, res, req) {
    config.oAuthAccessToken = res.access_token;
    config.oAuthRefreshToken = res.refresh_token;
    console.log(res);
    return res;
  });
})

router.post('/dcauth', function (req, res, next) {
  var auth = new authinfo()
  auth.user_id = 'tom' 
  auth.token_type = req.config.token_type
  auth.access_token = req.config.access_token
  auth.expires_in = req.config.expires_in
  auth.refresh_token = req.config.refresh_token

  auth.save(function (err, auth) {
    if(err){
      console.err(err);
      throw err;
    }
    res.send('success');
  })
})

module.exports = router