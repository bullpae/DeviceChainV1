angular.module('app')
.controller('DeviceRegCtrl', function ($scope, DeviceInfoSvc, $location) {
  $scope.register = function (devicetype, deviceid) {
    console.log("start device_reg.ctrl register")
    DeviceInfoSvc.register(devicetype, deviceid)
    .then(function (device_list) {
      console.log("Start DeviceInfoSvc register")
      $location.path('/device_info')
    })
    console.log("end device_reg.ctrl register")
  }

})
