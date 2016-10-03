angular.module('app')
.controller('ServerRegCtrl', function ($scope, ServerInfoSvc, $location) {
  $scope.register = function (servername, option) {
    console.log("start server_reg.ctrl register")
    ServerInfoSvc.register(servername, option)
    .then(function (server_list) {
      console.log("Start ServerInfoSvc register")
      $location.path('/server_info')
    })
    console.log("end server_reg.ctrl register")
  }

})
