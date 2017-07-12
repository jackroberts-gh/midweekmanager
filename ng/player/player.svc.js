(function() {
  'use strict';
  angular.module('app')
    .service('PlayerService', PlayerService);

  PlayerService.$inject = ['$http'];

  function PlayerService($http) {

    var svc = this;

    svc.fetchAll = function() {
      return $http.get('/api/players')
    }

    svc.fetchMyPlayers = function(user_id) {
      return $http.get('/api/players/' + user_id)
    }

    svc.fetchPlayers = function(team_id) {
      return $http.get('/api/players/' + team_id)
    }

    svc.fetchOnePlayer = function(user_id) {
      return $http.get('/api/players/' + user_id)
    }

    svc.fetchOnePlayerWithPlayerId = function(player_id) {
      return $http.get('/api/players/player/' + player_id)
    }

    svc.create = function(user_id, position, firstname, surname) {
      return $http.post('/api/players', {
        _userid: user_id,
        position: position,
        firstname: firstname,
        surname: surname
      })
    }
  }
})();