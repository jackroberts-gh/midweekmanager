angular.module('app')
.service('FixtureService', function($http) {

  this.fetchAll = function() {
    return $http.get('/api/fixtures')
  }

  this.fetchFixturesForTeam = function(team_id) {
    return $http.get('/api/fixtures/' + team_id)
  }

  this.fetchFixture = function(fixture_id) {
    return $http.get('/api/fixtures/fixture/' + fixture_id)
  }

  this.create = function(opposition, fixturedate) {
    return $http.post('/api/fixtures', {
      opposition: opposition,
      fixturedate: fixturedate
    })
  }

  this.assignPlayerToFixture = function(fixture_id, player_id) {
    return $http.put('/api/fixtures/player', {
        team_id: team_id,
        player_id: player_id
    })
  }

})
