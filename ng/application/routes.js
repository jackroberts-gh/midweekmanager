angular.module('app')
.config(function($httpProvider, $interpolateProvider, $routeProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  .when('/', { controller: 'JoinTeamCtrl', templateUrl: 'home.html'})
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
  .when('/teams/:team_id', { controller: 'MyTeamCtrl', templateUrl: 'myteam.html', resolve: {
    user: function(UserSvc) {
      return UserSvc.getUser();
    }
  }})
  .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html'})
  .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html'})
  .when('/logout', { controller: 'LogoutCtrl', template: ""})
})
