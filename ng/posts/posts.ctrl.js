(function() {
  'use strict';
  angular.module('app')
    .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['PostsService'];

  function PostsCtrl(PostsService) {

    var vm = this;
    vm.addPost = addPost;

    activate();

    function activate() {
      PostsService.fetch().success(function(posts) {
        vm.posts = posts;
      })
    }

    function addPost() {
      if (vm.postBody) {
        PostsService.create({
          username: vm.user,
          body: vm.postBody
        }).success(function(post) {
          vm.posts.unshift(post)
          vm.postBody = null
        })
      }
    }
  }
})();