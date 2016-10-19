angular.module('app')
.controller('AccountRegCtrl', function ($scope, AccountInfoSvc, $location) {
  $scope.register = function (userid, accountname, comment) {
    console.log("start account_reg.ctrl register: %s %s %s", userid, accountname, comment)
    AccountInfoSvc.register(userid, accountname, comment)
    .then(function (account_list) {
      console.log("Start AccountInfoSvc register")
      $location.path('/account_info')
    })
    console.log("end account_reg.ctrl register")
  }

})
