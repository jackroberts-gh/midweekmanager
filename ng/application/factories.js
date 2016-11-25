angular.module('app')
.factory('httpRequestInterceptor', requestInterceptor);

requestInterceptor.$inject = ['$q', '$location'];

function requestInterceptor($q, $location) {
  return {
    'responseError': function(rejection) {
      if(rejection.status === 401){
        $location.path('/login')
      }
      return $q.reject(rejection);
    }
  }
}
