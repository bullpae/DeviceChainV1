angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: '', templateUrl: '/templates/index.html' })
  .when('/dashboard',{ controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
  // account
  .when('/account_info',{ controller: 'AccountInfoCtrl', templateUrl: '/templates/account/account_info.html' })
  .when('/account_reg',{ controller: 'AccountRegCtrl', templateUrl: '/templates/account/account_reg.html' })
  .when('/account_detail',{ controller: 'AccountDtailCtrl', templateUrl: '/templates/account/account_detail.html' })
  // server
  .when('/server_info',{ controller: 'ServerInfoCtrl', templateUrl: '/templates/server/server_info.html' })
  .when('/server_reg',{ controller: 'ServerRegCtrl', templateUrl: '/templates/server/server_reg.html' })
  .when('/server_detail',{ controller: 'ServerDtailCtrl', templateUrl: '/templates/server/server_detail.html' })
  // device
  .when('/device_info',{ controller: 'DeviceInfoCtrl', templateUrl: '/templates/device/device_info.html' })
  .when('/device_reg',{ controller: 'DeviceRegCtrl', templateUrl: '/templates/device/device_reg.html' })
  .when('/device_detail',{ controller: 'DeviceDetailCtrl', templateUrl: '/templates/device/device_detail.html' })
  // cert
  .when('/cert_info',{ controller: 'CertInfoCtrl', templateUrl: '/templates/cert/cert_info.html' })
  .when('/cert_reg',{ controller: 'CertRegCtrl', templateUrl: '/templates/cert/cert_reg.html' })
  //  
  .when('/signup', { controller: 'SignupCtrl', templateUrl: '/templates/signup.html' })
  .when('/signin', { controller: 'SigninCtrl', templateUrl: '/templates/signin.html' })
  .when('/user_info', { controller: 'UserInfoCtrl', templateUrl: '/templates/user_info.html' })
  .when('/user_detail', { controller: 'UserDetailCtrl', templateUrl: '/templates/user_detail.html' })

  .when('/cert_test',    { controller: 'SigninCtrl', templateUrl: '/templates/cert_test.html' })
  .when('/cert_device',    { controller: 'SigninCtrl', templateUrl: '/templates/cert_device.html' })
})
