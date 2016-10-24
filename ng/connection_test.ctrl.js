angular.module('app')
.controller('ConnectionTestCtrl', function ($scope, $http, AccountInfoSvc) {
  var refresh = function () {
    console.log("recv_device")
  }

  refresh()

  $scope.connection_server = function () {

  }

  $scope.connection_server = function () {
    AccountInfoSvc.fetch()
    .then ( function (res) {
      console.log("get balance!!:%s", res[0].public_key)
      console.log(res)
      console.log("llll get address")

      return $http.get('/api/dcaddress/' + res[0].public_key, {
        account: res[0]
      }).then (function (response) {
        console.log(response)
        console.log("display res!!")
        $scope.address = response.data
      })
    })
  }
})
