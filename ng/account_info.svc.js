angular.module('app')
.service('AccountInfoSvc', function ($http) {
  var account_one
  var svc = this
  svc.get = function () {
    return account_one
  }

  svc.set = function (account) {
    account_one = account
  }

  svc.register = function (userid, accountname, comment) {
    // Get SC account info
    console.log("start get sc info: %s %s %s", userid, accountname, comment)
    return $http.post('/api/dcaccount', {
      accountname: accountname, comment: comment 
    }).then(function (res) {
      console.log("get sc info success")
      console.log(res)
      console.log("get sc info success")
      
      return $http.post('/api/account/account_info', {
        userid: userid, account: res.data 
      }).then(function () {
        console.log("success account info")
      })
    })
  }

  svc.fetch = function () {
    return $http.get('/api/account/account_info/' + currentuser.userid)
    .then(function (response) {
      return response.data
    })
  }

  svc.delete_account = function (account) {
    // todo: after delete sc account
    console.log(account)
    console.log("delete account info %s", account.accountid)
    return $http.delete('/api/dcaccount/' + account.accountid, {
      accountid: account.accountid 
    }).then(function (res) {
      return $http.delete('/api/account/account_info/' + account.accountid) 
      .then(function () {
        console.log("delete account info")
      })
    })
  }

  var currentuser = null
  svc.setuser = function (user) {
    currentuser = user
  }
})
