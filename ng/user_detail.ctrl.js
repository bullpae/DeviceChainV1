angular.module('app')
.controller('UserDetailCtrl', function ($scope, UserInfoSvc, $location) {

  var recv_user = function () {
    console.log("recv_user")
    $scope.user = UserInfoSvc.getcurrentuser()
    console.log($scope.user)
  }

  recv_user()
})