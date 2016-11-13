angular.module('app')
.service('TeamService', function($http) {

  this.fetchAll = function() {
    return $http.get('/api/teams')
  }

  this.fetchTeamsIManage = function(manager_id) {
    return $http.get('/api/teams/' + manager_id);
  }

  this.fetchMyTeams = function(players) {
    return $http.get('/api/teams/myteams/' + players);
  }

  this.fetchOne = function(team_id) {
    return $http.get('/api/teams/team/' + team_id);
  }

  this.create = function(teamname, teamtype, dayofplay, manager) {
    return $http.post('/api/teams', {
      name: teamname,
      type: teamtype,
      playday: dayofplay,
      manager: manager
    })
  }

  this.assignPlayerToTeam = function(team_id, player_id) {
    return $http.put('/api/teams/player', {
        team_id: team_id,
        player_id: player_id
    })
  }

  this.assignFixtureToTeam = function(team_id, fixture_id) {
    return $http.put('/api/teams/fixture', {
        team_id: team_id,
        fixture_id: fixture_id
    })
  }

})
