angular.module('app')
.service('FixtureService', function($http) {

  this.fetchAll = function() {
    return $http.get('/api/fixtures')
  }

  this.fetchFixturesForTeam = function(team_id) {
    return $http.get('/api/fixtures/' + team_id)
  }

  this.fetchOne = function(fixture_id) {
    return $http.get('/api/team/fixture/' + fixture_id)
  }

  this.create = function(teamname, teamtype, dayofplay, manager) {
    return $http.post('/api/fixtures', {
      name: teamname,
      type: teamtype,
      playday: dayofplay,
      manager: manager
    })
  }

  this.assignPlayerToFixture = function(fixture_id, player_id) {
    return $http.put('/api/team/fixture', {
        team_id: team_id,
        player_id: player_id
    })
  }

})
