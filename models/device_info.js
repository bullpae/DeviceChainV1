var db = require('../db')
var DeviceInfo = db.model('DeviceInfo', {
  userid: { type: String, required: true },
  devicetype: { type: String, required: false },
  deviceid: { type: String, required: true },
  serverid: { type: String, required: false },
  public_key: { type: String, required: false },
  asset_address: { type: String, required: false},
  watch_only: { type: String, required: false, default: "false"},
  network: { type: String, required: false, default: "testnet"},
  certstatus: { type: String, required: false, default: "false"},
  createdate: { type: Date, required: true, default: Date.now }
})

module.exports = DeviceInfo 