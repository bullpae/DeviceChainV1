angular.module('app')
.controller('SigninCtrl', function ($scope, UserInfoSvc, $location) {
  
  $scope.signin = function (username, password) {
    UserInfoSvc.signin(username, password)
    .then(function (user) {
      console.log("succ signin:")
      console.log(user)
      $scope.$emit('signin', user)
      $location.path('/')
      console.log("end signin")
    })
  }
  
  $scope.signout = function () {
    UserInfoSvc.signout()
    .then(function () {
      $scope.$emit('signout')
      $location.path('/')
    })
  }
})
