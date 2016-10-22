angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserInfoSvc, AccountInfoSvc, DeviceInfoSvc, $location) {
  // $scope.logBtnText = 'Login';
  $scope.$on('signin', function (_, user) {
    console.log("event signin app ctrl")
    //UserInfoSvc.getDcAuth() // Get SC API
    $scope.currentUser = user;
  })
  
  $scope.$on('signout', function () {
    console.log("event signout app ctrl")
    $scope.currentUser = null;
  })
  
  $scope.signout = function () {
    console.log("signout app ctrl")
    UserInfoSvc.signout();
    $scope.currentUser = null;
  }
  
  $scope.go = function ( path ) {
    $location.path( path );
  };
  
  $scope.issignedin = function () {
    var session = UserInfoSvc.gettoken()
    console.log("session & token: ")
    console.log(session)
    var signedin = "true"
    if (session == "") {
      console.log("session : ")
      signedin = "false"
    }

    console.log("signedin val: %s", signedin) 
    return signedin
  }
  
  $scope.userdetail = function () {
    console.log("set current user: ")
    console.log($scope.currentUser)
    UserInfoSvc.setselectuser($scope.currentUser)
    $location.path('/user_detail') // reload??
  }

  $scope.setuser_account = function (user) {
    console.log("setuser_account current user: ")
    console.log(user)
    AccountInfoSvc.setuser(user)
    DeviceInfoSvc.setcurrentuser(user)
  }
})
