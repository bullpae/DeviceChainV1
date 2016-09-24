angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: 'PostsCtrl', templateUrl: '/templates/posts.html' })
  .when('/dashboard',{ controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
  .when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
  .when('/block',    { controller: 'BlockCtrl', templateUrl: '/templates/block.html' })
})
