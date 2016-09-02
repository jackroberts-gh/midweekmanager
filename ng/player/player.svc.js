angular.module('app')
.service('PlayerService', function($http) {

  this.fetchAll = function() {
    return $http.get('/api/players')
  }

  this.fetchMyPlayers = function(user_id) {
    return $http.get('/api/players/' + user_id)
  }

  this.fetchPlayers = function(team_id) {
    return $http.get('/api/players/' + team_id)
  }

  this.fetchOnePlayer = function(player_id) {
    return $http.get('/api/players/:player_id', player_id)
  }

  this.create = function(user_id, position, firstname, surname) {
    return $http.post('/api/players', {
      _userid: user_id,
      position: position,
      firstname: firstname,
      surname: surname
    })
  }


})
