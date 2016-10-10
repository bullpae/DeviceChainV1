angular.module('app')
.controller('ServerDetailCtrl', function ($scope, ServerInfoSvc, $location) {
  $scope.detail = function (server) {
    console.log("start server_detail.ctrl detail")
    
    ServerInfoSvc.register(servername, option)
    .then(function (server_list) {
      console.log("Start ServerInfoSvc register")
      $location.path('/server_info')
    })
    console.log("end server_reg.ctrl register")
  }

})
