angular.module('app')
.controller('BlockCtrl', function ($scope, BlockSvc) {
  $scope.addPost = function () {
    if ($scope.postBody) {
      BlockSvc.create({
        body:     $scope.blockBody
      })
      .then(function () {
        $scope.blockBody = null
      })
    }
  }

  $scope.$on('ws:new_block', function (_, block) {
    $scope.$apply(function () {
      $scope..unshift(post)
    })
  })

  BlockSvc.fetch()
  .then(function (posts) {
    $scope.posts = posts
  })
})
