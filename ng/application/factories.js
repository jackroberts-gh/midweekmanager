angular.module('app')

.factory('httpRequestInterceptor', function ($q, $location) {
    return {
        'responseError': function(rejection) {
            if(rejection.status === 401){
                $location.path('/login')
            }
            return $q.reject(rejection);
         }
     };
});
