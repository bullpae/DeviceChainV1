angular.module('app')
.controller('ServerRegCtrl', function ($scope, ServerInfoSvc, $location) {
  $scope.register = function (servername, option) {
    ServerInfoSvc.register(servername, option)
    .then(function (server_list) {
      $location.path('/server_mana')
    })
  }

})
