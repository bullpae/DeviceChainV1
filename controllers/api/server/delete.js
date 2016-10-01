var router = require('express').Router()
var ServerInfo = require('../../../models/server_info')

router.post('/delete', function (req, res, next) {
  console.log("server_info remove ")
  // todo: get scalechain account and merge info and save
  var server = new ServerInfo({servername: req.body.servername})

  console.log("delete info %s", req.body.server.servername)

  server.remove ({servername: req.body.server.servername}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router