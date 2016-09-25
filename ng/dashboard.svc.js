angular.module('app')
.service('DashboardSvc', function ($http) {
  // this.fetch = function () {
  //   console.log("NODE TEST!!")
  //   // var dc_list = dc_node.list();
  //   dc_list ={"name":"test", "host":"192.168.10.20", "port":"9999", "status":"OK"};
  //   console.log("gdfsg TEST!!")
  // }
  this.fetch = function () {
    return $http.get('/api/dc_nodes')
    .then(function (response) {
      return response.data
    })
  }

  var svc = this
  svc.getNode = function () {
    console.log("getNode TEST!")
    return $http.get('/api/dc_nodes')
    .then(function (response) {
      console.log("kkk TEST")
      return response.data
    })
  }

})
