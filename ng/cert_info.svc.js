angular.module('app')
.service('CertInfoSvc', function ($http) {
  var svc = this
  svc.register = function (servername, devicetype, deviceid) {
    // Get device info
    console.log("start get cert")
    console.log("get serverid")

    return $http.get('/api/server/server_info/' + servername)
    .then (function (res) {
      console.log(res)
      // 서버 정보를 가져오면 서버 아이디를 넘겨 인증 정보 생성 API호출 
      console.log("get server info %s %s %s", res.data[0].serverid, devicetype, deviceid)
      
      return $http.post('/api/dcaddress', {
        serverid: res.data[0].serverid
      }).then (function (res) {
        console.log(res)
        console.log("get cert info %s", res.data.public_key)

        return $http.post('/api/cert/cert_info', {
          devicetype: devicetype, deviceid: deviceid, cert_info: res.data 
        }).then (function (res) {
          console.log("save cert info")
        })
      })
    })
  }

  svc.fetch = function () {
    return $http.get('/api/cert/cert_info')
    .then(function (response) {
      return response.data
    })
  }

  svc.delete_cert = function (cert) {
    return $http.delete('api/cert/cert_info/'+ cert.deviceid)
    .then (function (res) {
        console.log("delete device info")
    })
  }
})
