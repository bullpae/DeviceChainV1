/**
 * Created by bullpae on 2016-09-18.
 */

// API Key
// 02319fc69cba81a49dd824a0141e49afb3752b9398948cf2644b0aedd282376e96
//
// API Secret
// ef0d0e512109887be95556970711d010bc684bd24b97d050430a17e49a70bd43


// Import ScaleChain SDK
var ScaleChain = require('scalechain-nodejs');

var key = "02319fc69cba81a49dd824a0141e49afb3752b9398948cf2644b0aedd282376e96";
var secret = "ef0d0e512109887be95556970711d010bc684bd24b97d050430a17e49a70bd43";

var config = ScaleChain.configuration;
var auth = ScaleChain.AuthorizationController;

auth.getAccessTokenByClientCredential(key, secret, function(err, res, req) {
    config.oAuthAccessToken = res.access_token;
    config.oAuthRefreshToken = res.refresh_token;
    alert("버튼1을 누르셨습니다.");
});