angular.module('app')
.service('TeamService', function($http) {
  this.fetchAll = function() {
    return $http.get('/api/teams')
  }
  this.fetchTeamsIManage = function(manager_id) {
    return $http.get('/api/teams/' + manager_id)
  }
  this.fetchMyTeams = function(players) {
    console.log('passing this', players);
    return $http.get('/api/teams/myteams/' + players)// { params: { "players" : players}})
  }
  this.fetchOne = function(team_id) {
    return $http.get('/api/teams/team/' + team_id)
  }
  this.create = function(teamname, teamtype, dayofplay, manager) {
    return $http.post('/api/teams', {
      name: teamname,
      type: teamtype,
      playday: dayofplay,
      manager: manager
    }).then(function (response) {
      window.location.href = '/#/';
    })
  }
})
