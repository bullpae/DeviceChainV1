angular.module('app')
.controller('ConnectionTestCtrl', function ($scope, $http, AccountInfoSvc, $interval) {
  var refresh = function () {
    console.log("recv_device")
  }

  refresh()
  
  // var self = this;
  // self.activated = true;
  // self.determinateValue = 30;
  // // Iterate every 100ms, non-stop and increment
  // // the Determinate loader.
  // $interval(function() {
  //   self.determinateValue += 1;
  //   if (self.determinateValue > 100) {
  //     self.determinateValue = 30;
  //   }
  // }, 100);

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
