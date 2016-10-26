angular.module('app')
.controller('DeviceInfoCtrl', function ($scope, DeviceInfoSvc, $location) {

  var refresh = function() {
    DeviceInfoSvc.getlist()
    .then(function (device_list) {
      $scope.device_list = device_list
    })
  };

  refresh()

  $scope.delete_device = function (device) {
    if (device) {
      DeviceInfoSvc.delete_device(device)
      .then(function () {
        refresh()
      })
    }
  }

  $scope.send_device = function (device) {
    console.log("send_device")
    console.log(device)
    DeviceInfoSvc.setdevice(device)
  }
  
  $scope.cancel_auth = function (device) {
    console.log("cancel_auth() test")
    
    if (device) {
      DeviceInfoSvc.cancel_auth(device)
      .then(function () {
        refresh()
      }) 
    }
  }
})