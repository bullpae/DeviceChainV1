angular.module('app')
.controller('SignupCtrl', function ($scope, UserSvc, $location) {
  $scope.signup = function (username, password) {
    UserSvc.signup(username, password)
    .then(function (user) {
      $scope.$emit('signin', user)
      $location.path('/')
    })
  }
})
