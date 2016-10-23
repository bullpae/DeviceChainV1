angular.module('app')
.controller('MyDeviceRegCtrl', function ($scope, MyDeviceInfoSvc, $location) {
  $scope.register = function (userid, devicetype, deviceid) {
    console.log("start mydevice_reg.ctrl register: %s", userid)
    MyDeviceInfoSvc.register(userid, devicetype, deviceid)
    .then(function (device_list) {
      console.log("Start MyDeviceInfoSvc register")
      $location.path('/mydevice_detail')
    })
    console.log("end mydevice_reg.ctrl register")
  }

})
