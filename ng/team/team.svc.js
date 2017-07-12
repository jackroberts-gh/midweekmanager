(function() {
  'use strict';
  angular.module('app')
    .service('TeamService', TeamService);

  TeamService.$inject = ['$http'];

  function TeamService($http) {

    var svc = this;

    svc.fetchAll = function() {
      return $http.get('/api/teams')
    }

    svc.fetchTeamsIManage = function(manager_id) {
      return $http.get('/api/teams/' + manager_id);
    }

    svc.fetchMyTeams = function(players) {
      if (players.length !== 0) {
        return $http.get('/api/teams/myteams/' + players);
      }
    }

    svc.fetchOne = function(team_id) {
      return $http.get('/api/teams/team/' + team_id);
    }

    svc.create = function(teamname, teamtype, dayofplay, manager) {
      return $http.post('/api/teams', {
        name: teamname,
        type: teamtype,
        playday: dayofplay,
        manager: manager
      })
    }

    svc.assignPlayerToTeam = function(team_id, player_id) {
      return $http.put('/api/teams/player', {
        team_id: team_id,
        player_id: player_id
      })
    }

    svc.assignFixtureToTeam = function(team_id, fixture_id) {
      return $http.put('/api/teams/fixture', {
        team_id: team_id,
        fixture_id: fixture_id
      })
    }
  }
})();