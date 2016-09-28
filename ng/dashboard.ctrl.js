angular.module('app')
.controller('DashboardCtrl', function ($scope, DashboardSvc) {
  // $scope.dc_list = [
  //   {"name":"test1", "host":"192.168.10.20", "port":"9999", "status":"OK"},
  //   {"name":"test2", "host":"192.168.10.20", "port":"9999", "status":"OK"},
  //   {"name":"test3", "host":"192.168.10.20", "port":"9999", "status":"OK"},
  // ]

  $scope.getAuth = function () {
    DashboardSvc.getDcAuth();
  }

  DashboardSvc.getNode()
  .then(function (dc_nodes) {
    $scope.dc_list = dc_nodes;
  })
})

