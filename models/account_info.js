var db = require('../db')
var AccountInfo = db.model('AccountInfo', {
  userid: { type: String, required: true },
  accountname: { type: String, required: true },
  comment: { type: String, required: false },
  accountid: { type: String, required: true, unique: true },
  createdate: { type: Date, required: true, default: Date.now },
  // address info
  public_key: { type: String, required: false },
  asset_address: { type: String, required: false},
  watch_only: { type: String, required: false },
  network: { type: String, required: false},
  certstatus: { type: String, required: false},
  createdate_addr: { type: Date, required: false, default: Date.now }
})

module.exports = AccountInfo 