(function() {
  'use strict';
  angular.module('app')
    .config(config);

  config.$inject = ['$httpProvider', '$interpolateProvider', '$routeProvider'];

  function config($httpProvider, $interpolateProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'JoinTeamCtrl',
        controllerAs: 'vm',
        templateUrl: 'home.html'
      })
      .when('/createteam', {
        controller: 'CreateTeamCtrl',
        controllerAs: 'vm',
        templateUrl: 'createteam.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/teams', {
        controller: 'TeamCtrl',
        controllerAs: 'vm',
        templateUrl: 'teams.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/teams/:team_id', {
        controller: 'MyTeamCtrl',
        controllerAs: 'vm',
        templateUrl: 'myteam.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/teams/:team_id/fixture/:fixture_id', {
        controller: 'MyFixturesCtrl',
        controllerAs: 'vm',
        templateUrl: 'myteamfixtures.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/teams/:team_id/result/:fixture_id', {
        controller: 'MyResultsCtrl',
        controllerAs: 'vm',
        templateUrl: 'myteamresults.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/teams/players/:player_id', {
        controller: 'MyPlayersCtrl',
        controllerAs: 'vm',
        templateUrl: 'myteamplayers.html',
        resolve: {
          user: function(UserSvc) {
            return UserSvc.getUser();
          }
        }
      })
      .when('/register', {
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        templateUrl: 'register.html'
      })
      .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        templateUrl: 'login.html'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        controllerAs: 'vm',
        template: ""
      })

    $httpProvider.interceptors.push('httpRequestInterceptor');
  }
})();