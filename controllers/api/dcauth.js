var router = require('express').Router()
var ScaleChain = require('scalechain-nodejs');
var AuthInfo = require('../../models/dcauth.info')

router.get('/dcauth', function (req, res, next) {
  console.log("dcauth module test")
  
  var conditions = { user_id: "tom"}
  AuthInfo.findOne(conditions)
  .exec(function (err, auth) {
    console.log(auth)
    console.log("auth test!!!")
    if (err) { return next(err) }
    if (auth != null) { 
      console.log("get auth info success!!")
      var config = ScaleChain.configuration
      config.oAuthAccessToken = auth.access_token;
      config.oAuthRefreshToken = auth.refresh_token;
   
      console.log(config) 
      console.log("get dcauth info: ")
      console.log(auth)
      return res
    } else {
      console.log("get auth info fail!!")
      console.log("get dcauth!!!!!")
      var key = "02319fc69cba81a49dd824a0141e49afb3752b9398948cf2644b0aedd282376e96";
      var secret = "ef0d0e512109887be95556970711d010bc684bd24b97d050430a17e49a70bd43";

      var config = ScaleChain.configuration;
      var authCtrl = ScaleChain.AuthorizationController;

      authCtrl.getAccessTokenByClientCredential(key, secret, function(err, response, request) {
        config.oAuthAccessToken = response.access_token;
        config.oAuthRefreshToken = response.refresh_token;
        console.log(response);
        // save auth info
        var auth = new AuthInfo()
        auth.user_id = 'tom' 
        auth.token_type = response.token_type
        auth.access_token = response.access_token
        auth.expires_in = response.expires_in
        auth.refresh_token = response.refresh_token

        auth.save(function (err, auth) {
          if (err) { return next(err) }
          res.send('success');
        })
        return res;
      })
    }
  })
})

// router.post('/dcauth', function (req, res, next) {
//   var auth = new authinfo()
//   auth.user_id = 'tom' 
//   auth.token_type = req.config.token_type
//   auth.access_token = req.config.access_token
//   auth.expires_in = req.config.expires_in
//   auth.refresh_token = req.config.refresh_token

//   auth.save(function (err, auth) {
//     if(err){
//       console.err(err);
//       throw err;
//     }
//     res.send('success');
//   })
// })

module.exports = router