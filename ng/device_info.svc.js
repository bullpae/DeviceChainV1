angular.module('app')
.service('DeviceInfoSvc', function ($http) {
  var svc = this
  svc.register = function (devicetype, deviceid) {
    // Get device info
    console.log("start get device")

    return $http.post('/api/device/device_info', {
      devicetype: devicetype, deviceid: deviceid 
    }).then(function () {
      console.log("success device info")
    })
  }

  svc.fetch = function () {
    return $http.get('/api/device/device_info')
    .then(function (response) {
      return response.data
    })
  }

  svc.delete_device = function (device) {
    return $http.delete('api/device/device_info/'+ device.deviceid)
    .then (function (res) {
        console.log("delete device info")
    })
    // // todo: after delete sc account
    // console.log(device)
    // console.log("delete device info %s", device.deviceid)
    // return $http.delete('/api/device/device_info/' + device.deviceid, {
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
