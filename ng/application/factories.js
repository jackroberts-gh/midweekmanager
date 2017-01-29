(function() {
  'use strict';
  angular.module('app')
    .factory('httpRequestInterceptor', requestInterceptor);

  requestInterceptor.$inject = ['$q', '$location'];

  function requestInterceptor($q, $location) {
    return {

      'request': function(config) {
        config.headers['X-Auth'] = window.localStorage.midweekmanagertoken;
        return config;
      },

      'responseError': function(rejection) {
        if (rejection.status === 401) {
          $location.path('/login');
        } else {
          delete window.localStorage.midweekmanagertoken;
          location.reload();
        }
        return $q.reject(rejection);
      }
    }
  }
})();