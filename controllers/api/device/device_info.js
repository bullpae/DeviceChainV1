var router = require('express').Router()
var DeviceInfo = require('../../../models/device_info')

router.get('/device_info/:userid', function (req, res, next) {
  var cond = req.params.userid
  
  console.log("DeviceInfo condition: %s", cond)
 
  if (cond == "") {
    DeviceInfo.find({})
    .sort('-date')
    .exec(function (err, device) {
      if (err) { return next(err) }
      console.log(device)
      res.json(device)
      console.log("get all device info %s", device.userid)
    })
  } else {
    DeviceInfo.find({userid:cond})
    .sort('-date')
    .exec(function (err, device) {
      if (err) { return next(err) }
      console.log(device)
      res.json(device)
      console.log("get device info %s", device.userid)
    })
  }
})

router.get('/device_info/:deviceid/get', function (req, res, next) {
  var cond = req.params.deviceid
  
  console.log("DeviceInfo condition deviceid: %s", cond)
  DeviceInfo.findOne(cond)
  .exec(function (err, device) {
    if (err) { return next(err) }
    console.log("get device info")
    console.log(device)
    res.json(device)
  })
})

router.get('/device_info', function (req, res, next) {
  DeviceInfo.find({})
  .sort('-date')
  .exec(function (err, device_list) {
    if (err) { return next(err) }
    console.log("get all device info")
    console.log(device_list)
    res.json(device_list)
  })
})

// router.get('/device_info', function (req, res, next) {
//   console.log("device_info get 1")
//   DeviceInfo.find()
//   .sort('-date')
//   .exec(function (err, device_list) {
//     if (err) { return next(err) }
//     res.json(device_list)
//   })
// })

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

router.post('/device_info/:userid', function (req, res, next) {
  console.log("put address_info post 1: %s", req.params.userid)
  console.log(req.body)

  var conditions = { userid: req.params.userid }
  var update = { $set: {certstatus: "true"} }

  DeviceInfo.update(conditions, update) 
  .exec(function(err) {
    console.log("start update address ")
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router