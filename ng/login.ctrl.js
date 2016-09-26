angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, $location) {
  console.log("logint proc 1")
  
  $scope.login = function (username, password) {
    console.log("logint proc 2")
    UserSvc.login(username, password)
    .then(function (user) {
      console.log("logint proc 3")
      $scope.$emit('login', user)
      $location.path('/')
      console.log("logint proc 4")
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
