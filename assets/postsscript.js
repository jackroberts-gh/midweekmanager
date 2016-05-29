var app = angular.module('app', [])

app.service('PostsService', function($http) {
  this.fetch = function() {
    return $http.get('/api/posts')
  }
  this.create = function(post) {
    return $http.post('/api/posts', post)
  }
})

app.controller('PostsCtrl', function ($scope, PostsService) {
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

  /*$scope.todoRemove = function(post){
    $http.delete('/api/posts/' + $scope.posts[post]._id )
    .success(function() {
        $scope.posts.splice(post, 1);
      })
  }*/

  PostsService.fetch().success(function(posts) {
      $scope.posts = posts;
    })
})
