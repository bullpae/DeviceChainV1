angular.module('app')
.service('ServerInfoSvc', function ($http) {
  var svc = this
  svc.register = function (servername, option) {
    // Get SC account info
    console.log("start get sc info")
    return $http.post('/api/dcserver', {
      servername: servername, option: option 
    }).then(function (res) {
      console.log("get sc info success")
      console.log(res)
      console.log("get sc info success")
      
      return $http.post('/api/server/server_info', {
        server: res.data 
      }).then(function () {
        console.log("success server info")
      })
    })
  }

  svc.fetch = function () {
    return $http.get('/api/server/server_info')
    .then(function (response) {
      return response.data
    })
  }

  svc.delete_server = function (server) {
    // todo: after delete sc account
    console.log(server)
    console.log("delete server info %s", server.serverid)
    return $http.delete('/api/dcserver/' + server.serverid, {
      serverid: server.serverid 
    }).then(function (res) {
      return $http.post('/api/server/delete', {
        server: server 
      }).then(function () {
        console.log("delete server info")
      })
    })
  }
})
