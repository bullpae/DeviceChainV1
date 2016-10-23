angular.module('app')
.service('MyDeviceInfoSvc', function ($http, AccountInfoSvc, DeviceInfoSvc) {
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
    console.log("start get mydevice_info: %s", userid)
   
    return AccountInfoSvc.get_account(userid)
    .then(function(account) {
      console.log("my device register test!!")
      console.log(account) 
      console.log(account.length) 
      console.log(account[0])
      console.log("get account my device register test!!")
      
      return $http.post('/api/device/mydevice_info', {
        userid: userid, devicetype: devicetype, deviceid: deviceid, public_key: account[0].public_key
      }).then(function (response) {
        console.log("success mydevice_info")
        return response.data
      })    
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
    return $http.delete('api/device/mydevice_info/' + device.deviceid)
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
  
  svc.auth_device = function (device) {
    console.log("auth_device() test")
    // 정보 확인 
    var account_info =  DeviceInfoSvc.read_device(device)
    .then (function (res) {
      if (res) {
        console.log("compare info: %s %s", device.deviceid, res[0].deviceid)
      }
    })
    console.log("account_info")
    console.log(account_info)
    
    if (device.deviceid == account_info.deviceid) {
      console.log("same info!!")
    }
      //     // get node account
      //     return $http.get('/api/account/account_info/' + "admin")
      //     .then(function (account_info_res) {
      //       console.log("get node account!!")
      //       console.log(account_info_res.data)
      //       // send coin
      //       return $http.post("api/blockchain/account/" + device.deviceid, {
      //         device: device, account_info: account_info_res.data
      //       }).then (function (send_coin_res) {
      //         console.log("auth_device send coin!!! ")
      //         console.log(send_coin_res)
      //         //
      //       })
      //     })
          
      //     // signed transaction
          
      //     // send 
      //   }
      // }
  }
})
