angular.module('app')
.controller('SigninCtrl', function ($scope, UserInfoSvc, $location) {
  
  $scope.signin = function (username, password) {
    UserInfoSvc.signin(username, password)
    .then(function (user) {
      $scope.$emit('signin', user)
      $location.path('/')
    })
  }
  
  $scope.logout = function () {
    UserInfoSvc.signout()
    .then(function (user) {
      $scope.$emit('signout', user)
      $location.path('/')
    })
  }
})
