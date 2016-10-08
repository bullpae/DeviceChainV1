angular.module('app')
.controller('SigninCtrl', function ($scope, UserSvc, $location) {
  
  $scope.login = function (username, password) {
    UserSvc.login(username, password)
    .then(function (user) {
      $scope.$emit('login', user)
      $location.path('/')
    })
  }
  
  $scope.logout = function (username, password) {
    UserSvc.login('', '')
    .then(function (user) {
      $scope.$emit('logout', user)
      $location.path('/')
    })
  }
})
