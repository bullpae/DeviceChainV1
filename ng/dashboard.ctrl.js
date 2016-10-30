angular.module('app')
.controller('DashboardCtrl', function ($scope, DashboardSvc) {
  DashboardSvc.getNode()
  .then(function (dc_nodes) {
    $scope.dc_list = dc_nodes;
  })

  $scope.strSplit = function (str) {
    var strArray = str.split(':')
    return strArray
  }

  $scope.imagePath = '/images/bitcoin_testnet.png';
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

