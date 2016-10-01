angular.module('app')
.controller('ServerManaCtrl', function ($scope, ServerInfoSvc, $location) {
  // ServerInfoSvc.fetch()
  // .then(function (server_list) {
  //   $scope.server_list = server_list
  // })

  var refresh = function() {
    ServerInfoSvc.fetch()
    .then(function (server_list) {
      $scope.server_list = server_list
    })
  };

  refresh()

  $scope.delete_server = function (server) {
    if (server) {
      ServerInfoSvc.delete_server(server)
      .then(function () {
        // $location.path('/server_mana')
        refresh()
      })
    }
  }

  // $scope.delete_server ($scope.server) {
  //   ServerInfoSvc.delete_server (server)
  //   .then(function (server_list) {
  //     $location.path('/server_mana')
  //   })
  // }
})