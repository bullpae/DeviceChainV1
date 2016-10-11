angular.module('app')
.service('DashboardSvc', function ($http) {
  var svc = this;
  // svc.getDcAuth = function () {
  //   return $http.get('/api/dcauth')
  //   .then(function (res) {
  //     return res;
  //   })
  // }

  // save db
  // svc.saveDcAuth = function () {
    
  // }

  svc.getNode = function () {
    console.log("svc getNode exe start")
    console.log('dashboard.svc.js exe')
    return $http.get('/api/dcnode')
    .then(function (res) {
      console.log("succ dashboard.svc.js")
      console.log(res)
      return res.data
    })
  }
})
