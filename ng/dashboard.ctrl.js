
angular.module('app')
.controller('DashboardCtrl', function ($scope, DashboardSvc) {
  $scope.dc_list = [
    {"name":"test1", "host":"192.168.10.20", "port":"9999", "status":"OK"},
    {"name":"test2", "host":"192.168.10.20", "port":"9999", "status":"OK"},
    {"name":"test3", "host":"192.168.10.20", "port":"9999", "status":"OK"},
  ]

  // $scope.dc_list = dc_node.list;

  DashboardSvc.fetch()
  .then(function (dc_nodes) {
    console.log("test");
    $scope.dc_nodes = dc_nodes;
    console.log("test1");
  })
})

