angular.module('app')
.service('DashboardSvc', function ($http) {
  var svc = this;
  svc.getDcAuth = function () {
    return $http.get('/api/dcauth')
    .then(function (res) {
      config = res;
      return res;
    })
  }

  // save db
  svc.saveDcAuth = function () {
    
  }

  svc.getNode = function () {
    var config = svc.getDcAuth();

    console.log("getNode TEST!")
    console.log(config)

    return $http.get('/api/dcnode', {
      config: config
    }).then(function (response) {
      console.log("kkk TEST")
      return response.data
    })
  }
})
