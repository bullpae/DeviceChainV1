var router = require('express').Router()
var MyDeviceInfo = require('../../../models/mydevice_info')

router.get('/mydevice_info/:userid', function (req, res, next) {
  var cond = req.params.userid
  
  console.log("MyDeviceInfo condition: %s", cond)
 
  if (cond == "") {
    MyDeviceInfo.find({})
    .sort('-date')
    .exec(function (err, device) {
      if (err) { return next(err) }
      console.log(device)
      res.json(device)
      console.log("get all MyDeviceInfo")
    })
  } else {
    MyDeviceInfo.findOne({userid:cond})
    .sort('-date')
    .exec(function (err, device) {
      if (err) { return next(err) }
      console.log(device)
      res.json(device)
      console.log("get MyDeviceInfo")
    })
  }
})

router.get('/mydevice_info', function (req, res, next) {
  MyDeviceInfo.find({})
  .sort('-date')
  .exec(function (err, device_list) {
    if (err) { return next(err) }
    console.log("get all MyDeviceInfo")
    console.log(device_list)
    res.json(device_list)
  })
})

// router.get('/mydevice_info', function (req, res, next) {
//   console.log("mydevice_info get 1")
//   MyDeviceInfo.find()
//   .sort('-date')
//   .exec(function (err, device_list) {
//     if (err) { return next(err) }
//     res.json(device_list)
//   })
// })

router.post('/mydevice_info', function (req, res, next) {
  console.log("mydevice_info post 1: %s", req.body.userid)

  var device = new MyDeviceInfo()
  device.userid = req.body.userid
  device.devicetype = req.body.devicetype
  device.deviceid = req.body.deviceid
  device.serverid = ""
  device.public_key = req.body.public_key
  device.asset_address = ""

  console.log("save MyDeviceInfo %s %s %s", device.devicetype, device.deviceid, device.createdate)

  device.save(function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.get('/mydevice_info/:deviceid/get', function (req, res, next) {
  var cond = req.params.deviceid
  
  console.log("MyDeviceInfo condition deviceid: %s", cond)
  MyDeviceInfo.findOne({deviceid:cond})
  .exec(function (err, device) {
    if (err) { return next(err) }
    console.log("get mydevice info")
    console.log(device)
    console.log("end mydevice info")
    res.json(device)
    console.log("test my device info")
  })
})

router.delete('/mydevice_info/:deviceid', function (req, res, next) {
  console.log("MyDeviceInfo delete 1 %s", req.params.deviceid)
  console.log(req.params)
  // todo: get scalechain account and merge info and save

  console.log("delete MyDeviceInfo %s", req.params.deviceid)

  MyDeviceInfo.remove ({deviceid: req.params.deviceid}, function (err) {
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

router.post('/mydevice_info/:deviceid/update', function (req, res, next) {
  console.log("put mydevice_info post 1: %s", req.params.deviceid)
  console.log(req.body)

  var conditions = { deviceid: req.params.deviceid }
  var update = { $set: {certstatus: req.body.certstatus} }

  MyDeviceInfo.update(conditions, update) 
  .exec(function(err) {
    console.log("start update mydevice_info ")
    
    if (err) res.status(500).json({ error: 'database failure' })
    if (err) { return next(err) }
    res.sendStatus(201)
  })
})

module.exports = router