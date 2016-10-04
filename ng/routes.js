angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: '', templateUrl: '/templates/index.html' })
  .when('/dashboard',{ controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
  .when('/server_info',{ controller: 'ServerInfoCtrl', templateUrl: '/templates/server/server_info.html' })
  .when('/server_reg',{ controller: 'ServerRegCtrl', templateUrl: '/templates/server/server_reg.html' })
  .when('/device_info',{ controller: 'DeviceInfoCtrl', templateUrl: '/templates/device/device_info.html' })
  .when('/device_reg',{ controller: 'DeviceRegCtrl', templateUrl: '/templates/device/device_reg.html' })
  .when('/cert_info',{ controller: 'CertInfoCtrl', templateUrl: '/templates/cert/cert_info.html' })
  .when('/cert_reg',{ controller: 'CertRegCtrl', templateUrl: '/templates/cert/cert_reg.html' })
  .when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
})
