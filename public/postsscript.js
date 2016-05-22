var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope, $http) {
  $scope.addPost = function () {
    if ($scope.postBody) {
      $scope.posts.unshift({
        username: 'jackroberts',
        body: $scope.postBody
      })
    }
  }

  $http.get('http://localhost:3000/api/posts')
    .success(function(posts) {
      $scope.posts = posts;
    })
})
