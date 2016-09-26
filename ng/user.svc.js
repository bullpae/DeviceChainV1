angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/users')
    .then(function (response) {
      return response.data
    })
  }
  svc.login = function (username, password) {
    console.log("logint proc 5 %s %s", username, password)
    console.log(username)
    console.log(password)

    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (response) {
      console.log("logint proc 6")

      svc.token = response.data
      $http.defaults.headers.common['X-Auth'] = response.data
      console.log("logint proc 7")

      return svc.getUser()
    })
  }
  svc.register = function (username, password) {
    return $http.post('/api/users', {
      username: username, password: password
    }).then(function () {
      return svc.login(username, password)
    })
  }
})
