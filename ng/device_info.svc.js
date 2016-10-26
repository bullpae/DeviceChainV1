angular.module('app')
.service('DeviceInfoSvc', function ($http) {
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
    // Get device info
    console.log("start get device: %s")

    return $http.post('/api/device/device_info', {
      userid: userid, devicetype: devicetype, deviceid: deviceid 
    }).then(function () {
      console.log("success device info")
    })
  }

  svc.getlist = function () {
    return $http.get('/api/device/device_info')
    .then(function (response) {
      return response.data
    })
  }
  
  svc.fetch = function () {
    return $http.get('/api/device/device_info/' + currentuser.userid)
    .then(function (response) {
      return response.data
    })
  }
  
  svc.read_device = function (device) {
    return $http.get('/api/device/device_info/' + device.deviceid + "/get")
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
  
  svc.cancel_auth = function (device) {
    console.log("auth_device() test")
    // 정보 확인 
    return DeviceInfoSvc.read_device(device)
    .then (function (auth_device_res) {
      if (auth_device_res) {
        console.log("compare info: %s %s", device.deviceid, auth_device_res.deviceid)
        console.log("account_info")
        console.log(auth_device_res)
        
        if (device.deviceid == auth_device_res.deviceid) {
          console.log("same info!!")
          // get node account
          return $http.get('/api/account/account_info/' + "admin")
          .then(function (account_info_res) {
            console.log("get node account!!: %s", account_info_res.data[0].accountid)
            console.log(account_info_res)
            
            // send coin
            return $http.post("api/blockchain/account/send", {
              device: device, account_info: account_info_res.data[0], amount: 1000
            }).then (function (send_coin_res) {
              console.log("auth_device send coin!!! ")
              console.log(send_coin_res)
               
              var data = JSON.stringify(send_coin_res.data)
              console.log(data)
              
              return $http.post("api/blockchain/transaction/signtx", {
                trans_ret: data
              }).then (function (signed_trans_res) {  
                console.log("auth_device signed transaction!!! ")
                console.log(signed_trans_res)
                
                var tmpStr = new String(signed_trans_res.data)
                var tmpSplit = tmpStr.split('\\\"', 10)
                console.log(tmpSplit)

                var signed_tx = "{\"signed_tx_hex\":\"" + tmpSplit[3] + "\"}"
                console.log(signed_tx)
                
                return $http.post("api/blockchain/transaction/sendtx", {
                  send_ret: signed_tx
                }).then (function (send_trans_res) {
                  console.log("auth_device send transaction!!! ")
                  console.log(send_trans_res)
                  // certstatus update
                  return $http.post("api/device/mydevice_info/" + device.deviceid + "/update")
                  .then (function (update_ret1) {
                    console.log(update_ret1)
                    
                    return $http.post("api/device/device_info/" + device.deviceid + "/update")
                    .then (function (update_ret2) {
                      console.log(update_ret2)
                    })
                  })
                })
              })            
            })
          })
        }
      }
    })
  }
})
