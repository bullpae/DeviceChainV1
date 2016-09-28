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
    console.log("svc getNode exe start")
    // var config = svc.getDcAuth();

    // console.log("getNode TEST!")
    // console.log(config)
    console.log('dashboard.svc.js exe')
    return $http.get('/api/dcnode')
    .then(function (res) {
      console.log("kkk TEST")
      console.log(res)
      return res.data
    })
  }
})
