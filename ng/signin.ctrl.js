angular.module('app')
.controller('SigninCtrl', function ($scope, UserInfoSvc, $location) {
  
  $scope.signin = function (userid, password) {
    UserInfoSvc.signin(userid, password)
    .then(function (user) {
      console.log(user)
      if (!user) {
        toastr.error('Sign In', 'No User!!')
        return
      }
      console.log("succ signin:")
      console.log(user)
      $scope.$emit('signin', user)
      $scope.$emit('showalert', "Signined in " + user.userid, "alert-success")
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
