angular.module('app')
.controller('CertInfoCtrl', function ($scope, CertInfoSvc, $location) {

  var refresh = function() {
    CertInfoSvc.fetch()
    .then(function (cert_list) {
      $scope.cert_list = cert_list
    })
  };

  refresh()

  $scope.delete_cert = function (cert) {
    if (cert) {
      CertInfoSvc.delete_cert(cert)
      .then(function () {
        refresh()
      })
    }
  }
})