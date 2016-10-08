angular.module('app')
.controller('SigninCtrl', function ($scope, UserInfoSvc, $location) {
  
  $scope.login = function (username, password) {
    UserInfoSvc.login(username, password)
    .then(function (user) {
      $scope.$emit('login', user)
      $location.path('/')
    })
  }
  
  $scope.logout = function (username, password) {
    UserInfoSvc.login('', '')
    .then(function (user) {
      $scope.$emit('logout', user)
      $location.path('/')
    })
  }
})
