var db = require('../db')
var ServerInfo = db.model('ServerInfo', {
  servername: { type: String, required: true },
  option: { type: String, required: true },
  serverid: { type: String, required: true },
  createdate: { type: Date, required: true, default: Date.now }
})

module.exports = ServerInfo 