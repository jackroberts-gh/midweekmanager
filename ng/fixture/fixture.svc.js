(function() {
  'use strict';
  angular.module('app')
    .service('FixtureService', FixtureService);

  FixtureService.$inject = ['$http'];

  function FixtureService($http) {

    var svc = this;

    svc.fetchAll = function() {
      return $http.get('/api/fixtures')
    }

    svc.fetchFixturesForTeam = function(team_id) {
      return $http.get('/api/fixtures/' + team_id)
    }

    svc.fetchFixture = function(fixture_id) {
      return $http.get('/api/fixtures/fixture/' + fixture_id)
    }

    svc.create = function(opposition, fixturedate) {
      return $http.post('/api/fixtures', {
        opposition: opposition,
        fixturedate: fixturedate
      })
    }

    svc.populateFixture = function(fixture_id, player_id) {
      return $http.put('/api/fixtures/player', {
        team_id: team_id,
        player_id: player_id
      })
    }
  }
})();