angular.module('app')
.service('FixtureService', function($http) {

  this.fetchAll = function() {
    return $http.get('/api/fixtures')
  }

  this.fetchFixturesForTeam = function(team_id) {
    return $http.get('/api/fixtures/' + team_id)
  }

  this.fetchOne = function(team_id) {
    return $http.get('/api/team/fixture/' + team_id)
  }

  this.create = function(teamname, teamtype, dayofplay, manager) {
    return $http.post('/api/fixtures', {
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

})
