angular.module('app')
.controller('SignupCtrl', function ($scope, UserInfoSvc, $location) {
  $scope.signup = function (username, password, usertype) {
    UserInfoSvc.signup(username, password, usertype)
    .then(function (user) {
      $scope.$emit('signin', user)
      $location.path('/')
    })
  }
})
