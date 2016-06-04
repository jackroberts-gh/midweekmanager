angular.module('app')
.config(function($httpProvider, $interpolateProvider, $routeProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  .when('/', { controller: 'PostsCtrl', templateUrl: 'posts.html', resolve: {
    user: function(UserSvc) {
      return UserSvc.getUser();
    }
  }
})
  .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html'})
  .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html'})
})

.factory('httpRequestInterceptor', function ($q, $location) {
    return {
        'responseError': function(rejection) {
            // do something on error
            if(rejection.status === 401){
                $location.path('/login')
            }
            return $q.reject(rejection);
         }
     };
});
