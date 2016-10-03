var router = require('express').Router()
var ServerInfo = require('../../models/server_info')

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
  // todo: get scalechain account and merge info and save
  var server = new ServerInfo({servername: req.body.servername,
    option: req.body.option})
  
  server.serverid = "serverid test"
  console.log("save info %s %s %s", server.servername, server.option, server.serverid)

  server.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router