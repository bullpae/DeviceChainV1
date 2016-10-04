var router = require('express').Router()
var CertInfo = require('../../../models/cert_info')

router.get('/cert_info', function (req, res, next) {
  console.log("cert_info get 1")
  CertInfo.find()
  .sort('-date')
  .exec(function (err, cert_list) {
    if (err) { return next(err) }
    res.json(cert_list)
  })
})

router.post('/cert_info', function (req, res, next) {
  console.log("cert_info post 1")

  var cert = new CertInfo()
  cert.devicetype = req.body.devicetype
  cert.deviceid = req.body.deviceid
  cert.serverid = req.body.cert_info.serverid
  cert.public_key = req.body.cert_info.public_key 
  cert.asset_address = req.body.cert_info.asset_address
  cert.watch_only = req.body.cert_info.watch_only
  cert.network = req.body.cert_info.network
  cert.certstatus = '0'

  console.log("save cert info %s %s %s", cert.devicetype, cert.deviceid, cert.createdate)

  cert.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.delete('/cert_info/:deviceid', function (req, res, next) {
  console.log("cert_info delete 1 %s", req.params.deviceid)
  console.log(req.params)
  // todo: get scalechain account and merge info and save

  console.log("delete info %s", req.params.deviceid)

  CertInfo.remove ({deviceid: req.params.deviceid}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router