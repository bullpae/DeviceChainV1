angular.module('app')
.service('UserInfoSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/user_info')
    .then(function (response) {
      return response.data
    })
  }

  svc.signin = function (username, password) {
    console.log("logint proc 5 %s %s", username, password)

    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (response) {
      svc.token = response.data
      $http.defaults.headers.common['X-Auth'] = response.data
      return svc.getUser()
    })
  }

  svc.signup = function (username, password, usertype) {
    return $http.post('/api/user_info', {
      username: username, password: password, usertype: usertype
    }).then(function () {
      return svc.signin(username, password)
    })
  }
})
