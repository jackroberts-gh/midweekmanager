angular.module('app')
.service('UserSvc', function($http) {
  var svc = this
  svc.getUser = function() {
    return $http.get('/api/users')
  }

svc.login = function(username, password) {
  return $http.post('/api/sessions', {
    username: username, password: password
  }).then(function(val) {
    window.localStorage.token = val.data
    $http.defaults.headers.common['X-Auth'] = val.data
    return svc.getUser()
    })
  }

  svc.register = function(username, email, firstname, surname, dateofbirth, password) {
    return $http.post('/api/users', {
      username: username, email: email, firstname: firstname, surname: surname, dateofbirth: dateofbirth, password: password
    }).then(function() {
      return svc.login(username, password)
    })
  }
})
