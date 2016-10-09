angular.module('app')
.service('UserInfoSvc', function ($http, $location) {
  var svc = this
  svc.token = ""
  var currentuser = null
  
  svc.getcurrentuser = function () {
    return currentuser
  }
  
  svc.setcurrentuser = function (user) {
    currentuser = user
  }
  
  svc.getUser = function () {
    return $http.get('/api/user_info')
    .then(function (response) {
      return response.data
    })
  }
  
  svc.gettoken = function () {
    console.log("get token: %s", svc.token)
    return svc.token
  }
  
  svc.settoken = function (token) {
    console.log("set token: %s %s", svc.token, token)
    svc.token = token
  }

  svc.signin = function (username, password) {
    console.log("logint proc 5 %s %s", username, password)

    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function (response) {
      console.log("recv token:")
      console.log(response.data)
      svc.token = response.data
      $http.defaults.headers.common['X-Auth'] = response.data
      return svc.getUser()
    })
  }
  
  svc.signout = function () {
    svc.settoken("")
    $location.path('/#/Signin') 
  }

  svc.signup = function (username, password, usertype) {
    return $http.post('/api/user_info', {
      username: username, password: password, usertype: usertype
    }).then(function () {
      return svc.signin(username, password)
    })
  }
})
