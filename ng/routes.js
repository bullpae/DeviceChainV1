angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: '', templateUrl: '/templates/index.html' })
  .when('/dashboard',{ controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
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
  
  .when('/signup', { controller: 'SignupCtrl', templateUrl: '/templates/Signup.html' })
  .when('/signin', { controller: 'SigninCtrl', templateUrl: '/templates/Signin.html' })

  .when('/cert_test',    { controller: 'SigninCtrl', templateUrl: '/templates/cert_test.html' })
  .when('/cert_device',    { controller: 'SignCtrl', templateUrl: '/templates/cert_device.html' })
})
