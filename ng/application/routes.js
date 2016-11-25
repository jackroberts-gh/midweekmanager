angular.module('app')
.config(config);

config.$inject = ['$httpProvider', '$interpolateProvider', '$routeProvider'];

function config($httpProvider, $interpolateProvider, $routeProvider) {

  $routeProvider
    .when('/', { controller: 'JoinTeamCtrl', templateUrl: 'home.html'})
    .when('/createteam', { controller: 'CreateTeamCtrl', templateUrl: 'createteam.html', resolve: {
      user: function(UserSvc) {
        return UserSvc.getUser();
      }
    }})
    .when('/feed', { controller: 'PostsCtrl', controllerAs: 'vm', templateUrl: 'posts.html', resolve: {
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
    .when('/teams/:team_id/fixture/:fixture_id', { controller: 'MyFixturesCtrl', controllerAs: 'vm', templateUrl: 'myteamfixtures.html', resolve: {
      user: function(UserSvc) {
        return UserSvc.getUser();
      }
    }})
    .when('/teams/:team_id/result/:fixture_id', { controller: 'MyResultsCtrl', controllerAs: 'vm', templateUrl: 'myteamresults.html', resolve: {
      user: function(UserSvc) {
        return UserSvc.getUser();
      }
    }})
    .when('/teams/:team_id/player/:player_id', { controller: 'MyPlayersCtrl', controllerAs: 'vm', templateUrl: 'myteamplayers.html', resolve: {
      user: function(UserSvc) {
        return UserSvc.getUser();
      }
    }})
    .when('/register', { controller: 'RegisterCtrl', templateUrl: 'register.html'})
    .when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html'})
    .when('/logout', { controller: 'LogoutCtrl', template: ""})

  $httpProvider.interceptors.push('httpRequestInterceptor');
}
