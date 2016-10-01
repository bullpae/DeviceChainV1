var router = require('express').Router()
var ServerInfo = require('../../../models/server_info')

router.get('/server_info', function (req, res, next) {
  console.log("server_info get 1")
  ServerInfo.find()
  .sort('-date')
  .exec(function (err, server_list) {
    if (err) { return next(err) }
    res.json(server_list)
  })
})

router.post('/server_info', function (req, res, next) {
  console.log("server_info post 1")

  var server = new ServerInfo()
  server.servername = req.body.server.name
  server.option = req.body.server.identifier
  server.serverid = req.body.server._id
  server.createdate = req.body.server.created_at

  console.log("save info %s %s %s", server.servername, server.option, server.serverid)

  server.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router