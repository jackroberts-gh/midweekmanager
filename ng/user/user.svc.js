angular.module('app')
.service('UserSvc', UserSvc);

UserSvc.$inject = ['$http', '$q'];

function UserSvc($http, $q) {

  var svc = this;

  svc.getUser = function() {
    return $http.get('/api/users');
  }

  svc.getPlayersUser = function(user_id) {
    return $http.get('/api/users/' + user_id);
  }

  svc.login = function(username, password) {
    return $http.post('/api/sessions', {
      username: username, password: password
    }).then(function(val) {
      window.localStorage.midweekmanagertoken = val.data
      $http.defaults.headers.common['X-Auth'] = val.data
      return svc.getUser()
    })
  }

  svc.register = function(username, email, firstname, surname, dateofbirth, mobilenumber, password) {
    return $http.post('/api/users', {
      username: username, email: email, firstname: firstname, surname: surname, dateofbirth: dateofbirth, mobilenumber: mobilenumber, password: password
    }).then(function() {
      return svc.login(username, password)
    })
  }

  svc.logout = function() {
    window.localStorage.removeItem("midweekmanagertoken");
    $http.defaults.headers.common['X-Auth'] = '';
  }
}
