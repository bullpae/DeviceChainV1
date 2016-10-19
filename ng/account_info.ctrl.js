angular.module('app')
.controller('AccountInfoCtrl', function ($scope, AccountInfoSvc, $location) {

  var refresh = function() {
    AccountInfoSvc.fetch()
    .then(function (account_list) {
      console.log("refresh!!!")
      console.log(account_list)
      console.log("end refresh!!!")
      $scope.account_list = account_list
    })
  };

  refresh()

  $scope.add_account = function () {
    $location.path('/account_reg')
    refresh()
  }

  $scope.delete_account = function (account) {
    if (account) {
      AccountInfoSvc.delete_account(account)
      .then(function () {
        // $location.path('/account_info')
        refresh()
      })
    }
  }

  // $scope.delete_account ($scope.account) {
  //   AccountInfoSvc.delete_account (account)
  //   .then(function (account_list) {
  //     $location.path('/account_info')
  //   })
  // }
})