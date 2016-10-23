angular.module('app')
.service('MyDeviceInfoSvc', function ($http) {
  var device_one

  var svc = this
  svc.getdevice = function () {
    return device_one
  }

  svc.setdevice = function (device) {
    device_one = device 
  }
  
  var currentuser = null
  svc.getcurrentuser = function () {
    return currentuser
  }
  
  svc.setcurrentuser = function (user) {
    currentuser = user
  }
  
  svc.register = function (userid, devicetype, deviceid) {
    // Get mydevice_info info
    console.log("start get mydevice_info: %s")

    return $http.post('/api/device/mydevice_info', {
      userid: userid, devicetype: devicetype, deviceid: deviceid 
    }).then(function () {
      console.log("success mydevice_info")
    })
  }

  svc.getlist = function () {
    return $http.get('/api/device/mydevice_info')
    .then(function (response) {
      return response.data
    })
  }
  
  svc.fetch = function () {
    return $http.get('/api/device/mydevice_info/' + currentuser.userid)
    .then(function (response) {
      console.log("response TEST")
      console.log(response)
      console.log(response.data)
      console.log("response TEST")
      return response.data
    })
  }

  svc.delete_device = function (device) {
    return $http.delete('api/device/mydevice_info/'+ device.deviceid)
    .then (function (res) {
        console.log("delete mydevice_info")
    })
    // // todo: after delete sc account
    // console.log(device)
    // console.log("delete mydevice_info %s", device.deviceid)
    // return $http.delete('/api/device/mydevice_info/' + device.deviceid, {
    //   deviceid: device.deviceid 
    // }).then(function (res) {
    //   return $http.post('/api/device/delete', {
    //     device: device 
    //   }).then(function () {
    //     console.log("delete device info")
    //   })
    // })
  }
})
