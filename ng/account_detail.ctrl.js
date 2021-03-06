angular.module('app')
.controller('AccountDetailCtrl', function ($scope, AccountInfoSvc, $http) {

  var recv_account = function () {
    console.log("recv_device")
    $scope.account = AccountInfoSvc.get()
    console.log($scope.account)
  }

  recv_account()

  $scope.add_address = function () {
    console.log("add address")
    console.log($scope.account)
    console.log("llll add address")

    var account = $scope.account
    
    return $http.post('/api/dcaddress', {
      accountid: account.accountid
    }).then (function (res) {
      console.log(res)
      console.log("add address: %s", res.data.public_key)

      account.get_address = "true" 
      account.public_key = res.data.public_key
      account.asset_address = res.data.asset_address
      account.watch_only = res.data.watch_only
      account.network = res.data.network
      account.certstatus = "false"
      account.createdate_addr = res.data.created_at
      
      return $http.post('/api/account/address_info/' + account.userid, {
        account: account
      }).then (function (res) {
        console.log("save address")
      })
    })
  }

  $scope.del_address = function () {
    console.log("del address")
    console.log($scope.account)
    console.log("llll del address")

    var account = $scope.account
    
    return $http.delete('/api/dcaddress/' + account.public_key, {
      accountid: account.accountid
    }).then (function (res) {
      console.log(res)
      console.log("display res!!")
     
      account.get_address = "false" 
      account.public_key = ""
      account.asset_address = ""
      account.watch_only = ""
      account.network = ""
      account.certstatus = ""
      account.createdate_addr = ""
      
      return $http.delete('/api/account/address_info/' + account.userid, {
        account: account
      }).then (function (res) {
        console.log("delete address")
      })
    })
  }
  
  $scope.get_balance = function () {
    var account = AccountInfoSvc.get()
    console.log("get balance!!:%s", account.public_key)
    console.log(account)
    console.log("llll get address")

    return $http.get('/api/dcaddress/' + account.public_key, {
      account: account
    }).then (function (res) {
      console.log(res)
      console.log("display res!!")
      $scope.address = res.data
    })
  }

  $scope.get_transaction = function (account) {
    // var account = AccountInfoSvc.get()
    console.log(account)
    window.open('http://tbtc.blockr.io/address/info/' + account.public_key, 'newWindow');
  }

  $scope.get_coins = function () {
    window.open('https://testnet.manu.backend.hamburg/faucet', 'newWindow');
  }
})
