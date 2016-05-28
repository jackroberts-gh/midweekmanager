var app = angular.module('app', [])

app.controller('PostsCtrl', function ($scope, $http) {
  $scope.user = 'jackroberts';
  $scope.addPost = function () {
    if ($scope.postBody) {
      $http.post('/api/posts',
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

  $http.get('/api/posts')
    .success(function(posts) {
      $scope.posts = posts;
    })
})
