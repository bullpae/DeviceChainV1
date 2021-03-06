var db = require('../db')
var ServerInfo = db.model('CertInfo', {
  devicetype: { type: String, required: false },
  deviceid: { type: String, required: true },
  serverid: { type: String, required: false },
  public_key: { type: String, required: false },
  asset_address: { type: String, required: false},
  watch_only: { type: String, required: false },
  network: { type: String, required: false},
  certstatus: { type: String, required: false},
  createdate: { type: Date, required: true, default: Date.now }
})

module.exports = ServerInfo 