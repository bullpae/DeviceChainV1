var router = require('express').Router()
var DeviceInfo = require('../../../models/device_info')

router.get('/device_info', function (req, res, next) {
  console.log("device_info get 1")
  DeviceInfo.find()
  .sort('-date')
  .exec(function (err, device_list) {
    if (err) { return next(err) }
    res.json(device_list)
  })
})

router.post('/device_info', function (req, res, next) {
  console.log("device_info post 1: %s", req.body.userid)

  var device = new DeviceInfo()
  device.userid = req.body.userid
  device.devicetype = req.body.devicetype
  device.deviceid = req.body.deviceid
  device.serverid = ""
  device.public_key = ""
  device.asset_address = ""

  console.log("save device info %s %s %s", device.devicetype, device.deviceid, device.createdate)

  device.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.delete('/device_info/:deviceid', function (req, res, next) {
  console.log("device_info delete 1 %s", req.params.deviceid)
  console.log(req.params)
  // todo: get scalechain account and merge info and save

  console.log("delete info %s", req.params.deviceid)

  DeviceInfo.remove ({deviceid: req.params.deviceid}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router