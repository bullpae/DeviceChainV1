angular.module('app')
.controller('DeviceInfoCtrl', function ($scope, DeviceInfoSvc, $location) {

  var refresh = function() {
    DeviceInfoSvc.fetch()
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
})