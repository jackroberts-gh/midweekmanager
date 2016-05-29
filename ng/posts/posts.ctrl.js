angular.module('app')
.controller('PostsCtrl', function ($scope, PostsService) {
  $scope.user = 'jackroberts';
  $scope.addPost = function () {
    if ($scope.postBody) {
      PostsService.create(
        {
        username: $scope.user,
        body: $scope.postBody
      }
    ).success(function(post) {
      $scope.posts.unshift(post)
      $scope.postBody = null
    })
    }
  }

  PostsService.fetch().success(function(posts) {
      $scope.posts = posts;
    })
})
