var db = require('../db')
var AccountInfo = db.model('AccountInfo', {
  userid: { type: String, required: true },
  accountname: { type: String, required: true },
  comment: { type: String, required: false },
  accountid: { type: String, required: true, unique: true },
  createdate: { type: Date, required: true, default: Date.now }
})

module.exports = AccountInfo 