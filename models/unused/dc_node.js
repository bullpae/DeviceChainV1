var db = require('../db')
var Node = db.model('Node', {
  name:     { type: String, required: true },
  host:     { type: String, required: true },
  port:     { type: String,   required: true },
  status:   { type: String,   required: true }
})

module.exports = Node 
