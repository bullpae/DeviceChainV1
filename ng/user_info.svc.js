angular.module("app")
.service("UserInfoSvc", function ($http, $location) {
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
    return $http.get("/api/user_info")
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

  svc.signin = function (userid, password) {
    console.log("logint proc 5 %s %s", userid, password)

    return $http.post("/api/sessions", {
      userid: userid, password: password
    }).then(function (response) {
      console.log("recv token:")
      console.log(response.data)
      svc.token = response.data
      $http.defaults.headers.common["X-Auth"] = response.data
      return svc.getUser()
    })
  }
  
  svc.signout = function () {
    svc.settoken("")
    $location.path("/signin") 
  }

  svc.signup = function (username, userid, password, usertype) {
    return $http.post("/api/user_info", {
      username: username, userid: userid, password: password, usertype: usertype
    }).then(function () {
      console.log("succ signup")
      //return svc.signin(userid, password)
      $location.path("/signin")
    })
  }
})
