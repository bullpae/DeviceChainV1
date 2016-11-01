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
    }, function() {
      return null
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

  svc.get_mydevice_account = function (userid) {
    return $http.get('/api/account/account_info/' + userid)
    .then(function (account_info_res) {
      console.log("get node account!!: %s", account_info_res.data[0].accountid)
      console.log(account_info_res)
      return account_info_res     
    }, function (err) {
      return null
    })
  }

  svc.read_mydevice = function (deviceid) {
    return $http.get('/api/device/mydevice_info/' + deviceid + "/get")
    .then(function (response) {
      console.log("mydevice info")
      console.log(response)
      return response.data
    })
  }

  svc.cancel_auth = function (device) {
    console.log("cancel_auth() test")
    console.log(device)
    console.log("read_mydevice() test")

    return svc.read_mydevice(device.deviceid)
    .then (function (cancelDevice) {
      if (cancelDevice == null) {
        toastr.info("미등록 기기", "Error")
        return
      }
      
      console.log("Cancel Device User ID:%s", cancelDevice.userid)
      console.log(cancelDevice)

      return $http.get('/api/account/account_info/' + "admin")
      .then (function (adminAccount) {
        if (adminAccount == null) {
          toastr.info("No Admin Account", "Error")
          return
        }

        console.log("Admin Device Account ID:%s", adminAccount.data[0].accountid)
        console.log(adminAccount)

        return $http.get('/api/account/account_info/' + cancelDevice.userid)
        .then (function (deviceAccount) {
          if (deviceAccount == null) {
            toastr.info("No Device Account", "Error")
            return
          }

          console.log("Admin account: %s Device account:%s", adminAccount.data[0].accountid, deviceAccount.data[0].accountid)
          console.log(deviceAccount)
          toastr.info("권한 삭제 중...", "Info")
                
          // send coin
          return $http.post("api/blockchain/account/sendtx", {
            public_key: adminDevice.public_key, accountid: deviceAccount.data[0].accountid, amount: 100000
          }).then (function (send_coin_res) {
            toastr.info("권한 삭제 완료.", "Info")
            console.log("auth_device send coin!!! ")
            console.log(send_coin_res)
            toastr.info("블록 생성 및 서명 중...", "Info")

            var tmpSendStr = new String(send_coin_res.data)
            var tmpSendSplit = tmpSendStr.split('\"', 10)
            console.log(tmpSendSplit)

            var send_tx = "{\"unsigned_tx_hex\":\"" + tmpSendSplit[3] + "\"}"
            console.log(send_tx)
            // var data = JSON.stringify(send_coin_res.data)
            // console.log(data)
            
            return $http.post("api/blockchain/transaction/signtx", {
              trans_ret: send_tx
            }).then (function (signed_trans_res) {  
              toastr.info("블록 생성 및 서명 완료.", "Info")
              console.log("auth_device signed transaction!!! ")
              console.log(signed_trans_res)
              toastr.info("블록 동기화 중...", "Info")
              
              var tmpStr = new String(signed_trans_res.data)
              var tmpSplit = tmpStr.split('\"', 10)
              console.log(tmpSplit)

              var signed_tx = "{\"signed_tx_hex\":\"" + tmpSplit[3] + "\"}"
              console.log(signed_tx)
              
              return $http.post("api/blockchain/transaction/sendtx", {
                send_ret: signed_tx
              }).then (function (send_trans_res) {
                toastr.info("블록 동기화 완료.", "Info")
                console.log("auth_device send transaction!!! ")
                console.log(send_trans_res)
                
                // certstatus update
                return $http.post("api/device/mydevice_info/" + device.deviceid + "/update", {
                  certstatus: "false"
                }).then (function (update_ret1) {
                  console.log(update_ret1)
                  
                  return $http.post("api/device/device_info/" + device.deviceid + "/update", {
                    certstatus: "false"
                  }).then (function (update_ret2) {
                    toastr.info("기기 권한 삭제 완료.", "Info")
                    console.log(update_ret2)
                  })
                })
              }, function () {
                toastr.error("블록 동기화 오류!", "Error")
              })
            }, function () {
              toastr.error("블록 생성 및 서명 오류!", "Error")
            })            
          }, function () {
            toastr.error("권한 삭제 오류!", "Error")
          })
        })
      })
    })
  }

})
