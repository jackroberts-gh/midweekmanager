angular.module('app')
.service('PlayerService', function($http) {
  this.fetchAll = function() {
    return $http.get('/api/players')
  }
  this.fetchPlayers = function(team_id) {
    return $http.get('/api/players/' + team_id)
  }
  this.fetchOne = function(team_id) {
    return $http.get('/api/players/:player_id', player_id)
  }
  this.create = function(name) {
    return $http.post('/api/players', {
      name: name
    }).then(function (response) {
      //window.location.href = '/#/';
    })
  }
})
