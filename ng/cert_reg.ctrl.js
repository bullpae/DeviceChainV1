angular.module('app')
.controller('CertRegCtrl', function ($scope, CertInfoSvc, $location) {
  $scope.register = function (servername, devicetype, deviceid) {
    console.log("start cert_reg.ctrl register")

    CertInfoSvc.register(servername, devicetype, deviceid)
    .then(function (cert_list) {
      console.log("Start CertInfoSvc register")
      $location.path('/cert_info')
    })

    console.log("end cert_reg.ctrl register")
  }

})
