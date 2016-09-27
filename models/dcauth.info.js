var db = require('../db')
var authinfo = db.model('AuthInfo', {
  user_id: {type: String, required: true }, 
  token_type: { type: String, required: true }, 
  access_token: { type: String, required: true },
  expires_in: { type: String, requried: true } , 
  refresh_token: { type: String, requried: true } 
})

module.exports = authinfo