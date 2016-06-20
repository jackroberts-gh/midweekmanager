angular.module('app')
.config(function($httpProvider, $interpolateProvider, $routeProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
  $routeProvider
  .when('/', { controller: 'HomeCtrl', templateUrl: 'home.html'})
  .when('/createteam', { controller: 'CreateTeamCtrl', templateUrl: 'createteam.html', resolve: {
    user: function(UserSvc) {
      return UserSvc.getUser();
    }
  }})
  .when('/feed', { controller: 'PostsCtrl', templateUrl: 'posts.html', resolve: {
    user: function(UserSvc) {
      return UserSvc.getUser();
    }
  }})
  .when('/teams', { controller: 'TeamCtrl', templateUrl: 'teams.html', resolve: {
    user: function(UserSvc) {
      return UserSvc.getUser();
    }
  }})
  .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html'})
  .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html'})
  .when('/logout', { controller: 'LogoutCtrl', template: ""})
})

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
