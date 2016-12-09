(function() {
  'use strict';
  angular.module('app')
    .service('PostsService', PostsService);

  PostsService.$inject = ['$http'];

  function PostsService($http) {

    var svc = this;

    svc.fetch = function() {
      return $http.get('/api/posts')
    }

    svc.create = function(post) {
      return $http.post('/api/posts', post)
    }
  }
})();