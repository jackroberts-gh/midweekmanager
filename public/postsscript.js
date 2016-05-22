var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope) {
  $scope.addPost = function () {
    if ($scope.postBody) {
      $scope.posts.unshift({
        username: 'dickeyxxx',
        body: $scope.postBody
      })
    }
  }

  $scope.posts = [
    {
      username: 'dickeyxxx',
      body: 'Node rules!'
    },
    {
      username: 'jeffdickey',
      body: 'been trying out angular.js...'
    }
  ]
})
