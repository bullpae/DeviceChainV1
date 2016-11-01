angular.module('app')
.controller('MyDeviceDetailCtrl', function ($scope, MyDeviceInfoSvc, $location) {

  var refresh = function () {
    console.log("refresh")
    // $scope.device = MyDeviceInfoSvc.getdevice()
    // $scope.device = MyDeviceInfoSvc.fetch()
    MyDeviceInfoSvc.fetch()
    .then(function (device) {
      $scope.device = device
    })
    console.log("MyDeviceDetailCtrl refresh")
    console.log($scope.device)
  }

  refresh()
  
  $scope.add_mydevice = function () {
    console.log("add_mydevice() test")
    $location.path('/mydevice_reg')
  }

  $scope.del_mydevice = function (device) {
    console.log("del_mydevice() test")
    if (device) {
      MyDeviceInfoSvc.delete_device(device)
      .then(function () {
        refresh()
      })
    }
  }
  
  $scope.auth_mydevice = function (device) {
    console.log("auth_mydevice() test")
    
    if (device) {
      MyDeviceInfoSvc.auth_device(device)
      .then(function () {
        refresh()
      }) 
    }
  }

    $scope.get_transaction = function (device) {
    // var account = AccountInfoSvc.get()
    console.log(device)
    window.open('http://tbtc.blockr.io/address/info/' + device.public_key, 'newWindow');
  }
})