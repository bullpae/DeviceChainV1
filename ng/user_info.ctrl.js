angular.module('app')
.controller('UserInfoCtrl', function ($scope, UserInfoSvc, $location) {

  var refresh = function() {
    UserInfoSvc.fetch()
    .then(function (user_list) {
      $scope.user_list = user_list
    })
  };

  refresh()

  $scope.delete_user = function (user) {
    if (user) {
      UserInfoSvc.delete_user(user)
      .then(function () {
        refresh()
      })
    }
  }

  $scope.send_user = function (user) {
    console.log("send_user")
    console.log(user)
    UserInfoSvc.setselectuser(user)
  }
})