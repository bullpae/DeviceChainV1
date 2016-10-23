angular.module('app')
.controller('MyDeviceRegCtrl', function ($scope, MyDeviceInfoSvc, $location) {
  $scope.register = function (userid, devicetype, deviceid) {
    console.log("start mydevice_reg.ctrl register: %s", userid)
    MyDeviceInfoSvc.register(userid, devicetype, deviceid)
    .then(function (res) {
      console.log("Start MyDeviceInfoSvc register")
      $location.path('/mydevice_detail')
    })
    console.log("end mydevice_reg.ctrl register")
  }

})
