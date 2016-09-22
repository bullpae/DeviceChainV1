angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
  $scope.logBtnText = 'Login';
  $scope.$on('login', function (_, user) {
    $scope.currentUser = user;
  })
  $scope.go = function ( path ) {
    $location.path( path );
  };
})
