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

  // svc.read_device = function (device) {
  //   return $http.get('/api/device/mydevice_info/' + device.deviceid + "/get")
  //   .then(function (response) {
  //     return response.data
  //   }, function () {
  //     return null
  //   })
  // }

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

  // svc.signTransaction = function (data, key) {
  //   console.log("signTransaction TEST!!")
  //   console.log(data)
    
  //   return $http({
  //     method: 'POST',
  //     url: 'https://api.scalechain.io/v1/transactions/sign',
  //     headers: {"Authorization": "Bearer d36730995975edcad1115b43e13a8c0781394c2c", "Network": "testnet", "Content-Type": "application/json"},
  //     data: data
  //   }).then (function (res) {
  //     console(res)
  //     send
  //   })
  // }

  svc.auth_device = function (device) {
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
          toastr.info("등록 가능 기기입니다.", "Info")
          // get node account
          return $http.get('/api/account/account_info/' + "admin")
          .then(function (account_info_res) {
            console.log("get node account!!: %s", account_info_res.data[0].accountid)
            console.log(account_info_res)
            toastr.info("권한 등록 중...", "Info")
            
            // send coin
            return $http.post("api/blockchain/account/sendtx", {
              public_key: device.public_key, accountid: account_info_res.data[0].accountid, amount: 120000
            }).then (function (send_coin_res) {
              toastr.info("권한 등록 완료.", "Info")
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
                    certstatus: "true"
                  }).then (function (update_ret1) {
                    console.log(update_ret1)
                    
                    return $http.post("api/device/device_info/" + device.deviceid + "/update", {
                      certstatus: "true"
                    }).then (function (update_ret2) {
                      toastr.info("기기 등록 완료.", "Info")
                      console.log(update_ret2)
                    })
                  })
                }, function () {
                  toastr.error("블록 동기화 오류!", "Error")
                })
              }, function () {
                toastr.error("블록 생성 및 서명 오류!", "Error")
              })            
              
              // signed transaction
              // return $http.post("api/blockchain/transaction/sign", {
              //   trans_ret: send_coin_res.data
              // }).then (function (signed_trans_res) {
              //   console.log("auth_device signed transaction!!! ")
              //   console.log(signed_trans_res)
              //   // send signed transaction
              //   return $http.post("api/blockchain/transaction/sign", {
              //     send_ret: signed_trans_res.data
              //   }).then (function (send_trans_res) {
              //     console.log("auth_device send transaction!!! ")
              //     console.log(send_trans_res)

              //   })
              // })
            }, function () {
              toastr.error("권한 등록 오류!", "Error")
            })
          }, function () {
            toastr.error("등록정보 오류(미등록 기기)!", "Error")
          })
        } else {
          toastr.error("등록정보 오류(기기번호)!", "Error")
        }
      } else {
          toastr.error("미등록 기기입니다!!", "Error")
      }
    }, function () {
      toastr.error("미등록 기기입니다!!!", "Error")
    })
  }
})
