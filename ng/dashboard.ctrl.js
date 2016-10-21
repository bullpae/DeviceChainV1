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
})

