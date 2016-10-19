angular.module('app')
.controller('AccountDetailCtrl', function ($scope, AccountInfoSvc, $http) {

  var recv_account = function () {
    console.log("recv_device")
    $scope.account = AccountInfoSvc.get()
    console.log($scope.account)
  }

  recv_account()

  $scope.add_address = function () {
    console.log("get address")
    console.log($scope.account)
    console.log("llll get address")

    var account = $scope.account
    
    return $http.post('/api/dcaddress', {
      accountid: account.accountid
    }).then (function (res) {
      console.log(res)
      console.log("get address: %s", res.data.public_key)

      account.public_key = res.data.public_key
      account.asset_address = res.data.asset_address
      account.watch_only = res.data.watch_only
      account.network = res.data.network
      account.certstatus = "false"
      account.createdate_addr = res.data.created_at
      
      return $http.post('/api/account/address_info', {
        account: account
      }).then (function (res) {
        console.log("save address")
      })
    })
  }

  $scope.del_address = function () {
    console.log("get address")
    console.log($scope.account)
    console.log("llll get address")

    var account = $scope.account
    
    return $http.post('/api/dcaddress', {
      accountid: account.accountid
    }).then (function (res) {
      console.log(res)
      console.log("get address: %s", res.data.public_key)

      account.public_key = res.data.public_key
      account.asset_address = res.data.asset_address
      account.watch_only = res.data.watch_only
      account.network = res.data.network
      account.certstatus = "false"
      account.createdate_addr = res.data.created_at
      
      return $http.post('/api/account/address_info', {
        account: account
      }).then (function (res) {
        console.log("save address")
      })
    })
  }

//   svc.fetch = function () {
//     return $http.get('/api/cert/cert_info')
//     .then(function (response) {
//       return response.data
//     })
//   }

//   svc.delete_cert = function (cert) {
//     return $http.delete('api/cert/cert_info/'+ cert.deviceid)
//     .then (function (res) {
//         console.log("delete device info")
//     })
//   }
})
