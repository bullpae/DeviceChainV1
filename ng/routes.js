angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: 'PostsCtrl', templateUrl: '/templates/posts.html' })
  .when('/dashboard',{ controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
  .when('/server_mana',{ controller: 'ServerManaCtrl', templateUrl: '/templates/server/server_mana.html' })
  .when('/server_reg',{ controller: 'ServerRegCtrl', templateUrl: '/templates/server/server_reg.html' })
  .when('/device_info',{ controller: 'DeviceInfoCtrl', templateUrl: '/templates/device/device_info.html' })
  .when('/device_reg',{ controller: 'DeviceRegCtrl', templateUrl: '/templates/device/device_reg.html' })
  .when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
  .when('/block',    { controller: 'BlockCtrl', templateUrl: '/templates/block.html' })
})
