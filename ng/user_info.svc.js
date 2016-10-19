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
  
  var selectuser = null
  svc.getselectuser = function () {
    return selectuser 
  }

  svc.setselectuser= function (user) {
    selectuser = user 
  }
  
  svc.getUser = function (userid) {
    return $http.get("/api/user_info/" + userid)
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
      console.log("getDcAuth()!!!!!!!")
      svc.getDcAuth() // Get SC API 
      return svc.getUser(userid)
    })
  }
  
  svc.getDcAuth = function () {
    console.log("get sc api token->user_info.svc.js")
    return $http.get("/api/dcauth")
    .then(function (res) {
      console.log("succ get sc api token")
      return res;
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

  svc.fetch = function () {
    console.log("start fetch!!")
    var uid = "" 
    return $http.get("/api/user_info/" + uid)
    .then(function (response) {
      console.log(response.data)
      
      return response.data
    })
  }

  svc.delete_user = function (user) {
    return $http.delete("api/user_info/" + user.userid)
    .then (function (res) {
        console.log("delete user info")
    })
  }
})
