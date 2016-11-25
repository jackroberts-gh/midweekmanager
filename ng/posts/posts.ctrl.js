angular.module('app')
.controller('PostsCtrl', PostsCtrl);

PostsCtrl.$inject = ['PostsService'];

function PostsCtrl(PostsService) {

  var vm = this;
  vm.addPost = addPost;
  vm.test = test;

  activate();

  function addPost() {
    if (vm.postBody) {
      PostsService.create(
        {
          username: vm.user,
          body: vm.postBody
        }
      ).success(function(post) {
        vm.posts.unshift(post)
        vm.postBody = null
      })
    }
  }

  function test(test) {
    console.log(test);
  }

  function activate() {
    PostsService.fetch().success(function(posts) {
      vm.posts = posts;
    })
  }
}
