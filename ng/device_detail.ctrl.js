angular.module('app')
.controller('DeviceDetailCtrl', function ($scope, DeviceInfoSvc, $location) {

  var recv_device = function () {
    console.log("recv_device")
    $scope.device = DeviceInfoSvc.get()
    console.log($scope.device)
  }

  recv_device()
})