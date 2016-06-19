angular.module('app')
.service('TeamService', function($http) {
  this.fetchAll = function() {
    return $http.get('/api/teams')
  }
  this.fetchOne = function(team_id) {
    return $http.get('/:team_id', team_id)
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
