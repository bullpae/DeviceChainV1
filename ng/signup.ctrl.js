angular.module('app')
.controller('SignupCtrl', function ($scope, UserInfoSvc, $location) {
  $scope.signup = function (username, userid, password, usertype) {
    UserInfoSvc.signup(username, userid, password, usertype)
    .then(function (user) {
      // $scope.$emit('signin', user)
      $location.path('/#/signin')
    })
  }
})
