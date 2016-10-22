angular.module('app')
.controller('MyDeviceDetailCtrl', function ($scope, DeviceInfoSvc, $location) {

  var recv_device = function () {
    console.log("recv_device")
    $scope.device = DeviceInfoSvc.getdevice()
    console.log($scope.device)
  }

  recv_device()
})