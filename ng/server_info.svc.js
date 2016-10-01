angular.module('app')
.service('ServerInfoSvc', function ($http) {
  var svc = this
  svc.register = function (servername, option) {
    return $http.post('/api/server/server_info', {
      servername: servername, option: option 
    }).then(function () {
      console.log("success server info")
    })
  }

  svc.fetch = function () {
    return $http.get('/api/server/server_info')
    .then(function (response) {
      return response.data
    })
  }

  svc.delete_server = function (server) {
    return $http.post('/api/server/delete', {
      server: server 
    }).then(function () {
      console.log("delete server info")
    })
  }
})
