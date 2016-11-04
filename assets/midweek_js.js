function MyFixturesCtrl(e,t,r,n,o){}var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope","$http","$location","UserSvc",function(e,t,r,n){null!=window.localStorage.getItem("midweekmanagertoken")&&(t.defaults.headers.common["X-Auth"]=window.localStorage.getItem("midweekmanagertoken"),n.getUser().success(function(t){e.currentUser=t})),e.$on("login",function(t,r){e.currentUser=r}),e.$on("logout",function(t,r){e.currentUser=""})}]),angular.module("app").factory("httpRequestInterceptor",["$q","$location",function(e,t){return{responseError:function(r){return 401===r.status&&t.path("/login"),e.reject(r)}}}]),$(document).ready(function(){function e(){1==n?(r.hide(),t.removeClass("is-open"),t.addClass("is-closed"),n=!1):(r.show(),t.removeClass("is-closed"),t.addClass("is-open"),n=!0)}var t=$(".hamburger"),r=$(".overlay"),n=!1;t.click(function(){e()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("toggled")}),$(function(){var t=$("#sidebar-wrapper");t.on("click","a",null,function(){$("#wrapper").removeClass("toggled"),e()})})}),angular.module("app").config(["$httpProvider","$interpolateProvider","$routeProvider",function(e,t,r){e.interceptors.push("httpRequestInterceptor"),r.when("/",{controller:"JoinTeamCtrl",templateUrl:"home.html"}).when("/createteam",{controller:"CreateTeamCtrl",templateUrl:"createteam.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/feed",{controller:"PostsCtrl",templateUrl:"posts.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/teams",{controller:"TeamCtrl",templateUrl:"teams.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/teams/:team_id",{controller:"MyTeamCtrl",templateUrl:"myteam.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/teams/:team_id/fixture/:fixture_id",{controller:"MyFixturesCtrl",controllerAs:"vm",templateUrl:"myteamfixtures.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"}).when("/logout",{controller:"LogoutCtrl",template:""})}]),angular.module("app").service("FixtureService",["$http",function(e){this.fetchAll=function(){return e.get("/api/fixtures")},this.fetchFixturesForTeam=function(t){return e.get("/api/fixtures/"+t)},this.fetchOne=function(t){return e.get("/api/fixtures/fixture/"+t)},this.create=function(t,r){return e.post("/api/fixtures",{opposition:t,fixturedate:r})},this.assignPlayerToFixture=function(t,r){return e.put("/api/fixtures/player",{team_id:team_id,player_id:r})}}]),angular.module("app").controller("MyFixturesCtrl",MyFixturesCtrl),MyFixturesCtrl.$inject=["UserSvc","TeamService","PlayerService","FixtureService","$routeParams"],angular.module("app").controller("PostsCtrl",["$scope","PostsService",function(e,t){e.addPost=function(){e.postBody&&t.create({username:e.user,body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null})},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsService",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").service("PlayerService",["$http",function(e){this.fetchAll=function(){return e.get("/api/players")},this.fetchMyPlayers=function(t){return e.get("/api/players/"+t)},this.fetchPlayers=function(t){return e.get("/api/players/"+t)},this.fetchOnePlayer=function(t){return e.get("/api/players/:player_id",t)},this.create=function(t,r,n,o){return e.post("/api/players",{_userid:t,position:r,firstname:n,surname:o})}}]),angular.module("app").controller("CreateTeamCtrl",["$scope","UserSvc","TeamService","PlayerService",function(e,t,r,n){e.registerTeam=function(t,o,a,i){r.create(t,o,a,e.currentUser._id).success(function(t){n.create(e.currentUser._id,i,e.currentUser.firstname,e.currentUser.surname).success(function(e){r.assignPlayerToTeam(t._id,e._id).success(function(){window.location.href="/#/"})})})}}]),angular.module("app").controller("JoinTeamCtrl",["$scope","TeamService","PlayerService",function(e,t,r){e.joinTeam=function(n,o){t.fetchOne(n).success(function(a){r.create(e.currentUser._id,o,e.currentUser.firstname,e.currentUser.surname).success(function(e){t.assignPlayerToTeam(n,e._id).success(function(){$("#joinTeamModal").modal("hide")})})}).error(function(){$("#jointeamerror").removeClass("hidden")})}}]),angular.module("app").controller("MyTeamCtrl",["$scope","UserSvc","TeamService","FixtureService","$routeParams","$parse",function(e,t,r,n,o,a){e.icons=[],e.fixtures=[];var i=o.team_id;r.fetchOne(i).success(function(t){e.team=t,angular.forEach(e.team.players,function(t,r){void 0===e[t.position]?a(t.position).assign(e,1):e[t.position]++,e.icons.push(e[t.position])})}),e.showFixture=function(e){$location.path("/teams/"+i+"/fixture/"+team.fixture)},e.positionOrder=function(e){switch(e.position){case"Goalkeeper":return 1;case"Defender":return 2;case"Midfielder":return 3;case"Forward":return 4}},e.addFixture=function(t,o){n.create(t,o).success(function(t){e.team.fixtures.push(t),r.assignFixtureToTeam(i,t._id).success(function(){$("#addFixtureModal").modal("hide")}).error(function(){})}).error(function(e){})}}]),angular.module("app").controller("TeamCtrl",["$scope","$location","UserSvc","TeamService","PlayerService",function(e,t,r,n,o){o.fetchMyPlayers(e.currentUser._id).success(function(r){e.players=[],angular.forEach(r,function(t){e.players.push(t._id)}),n.fetchMyTeams(e.players).success(function(r){1===r.length?t.path("/teams/"+r[0]._id):e.teamsPlayedFor=r})}),e.showTeam=function(e){t.path("/teams/"+e._id)}}]),angular.module("app").service("TeamService",["$http",function(e){this.fetchAll=function(){return e.get("/api/teams")},this.fetchTeamsIManage=function(t){return e.get("/api/teams/"+t)},this.fetchMyTeams=function(t){return e.get("/api/teams/myteams/"+t)},this.fetchOne=function(t){return e.get("/api/teams/team/"+t)},this.create=function(t,r,n,o){return e.post("/api/teams",{name:t,type:r,playday:n,manager:o})},this.assignPlayerToTeam=function(t,r){return e.put("/api/teams/player",{team_id:t,player_id:r})},this.assignFixtureToTeam=function(t,r){return e.put("/api/teams/fixture",{team_id:t,fixture_id:r})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,t){e.login=function(r,n){t.login(r,n).then(function(t){e.$emit("login",t.data),window.location.href="/#/"})["catch"](function(e){$("#loginerror").removeClass("hidden")})}}]),angular.module("app").controller("LogoutCtrl",["$scope","UserSvc",function(e,t){t.logout(),e.$emit("logout"),window.location.href="/"}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(r,n,o,a,i,s,c){t.register(r,n,o,a,i,s,c).then(function(t){e.$emit("login",t.data),window.location.href="/#/"})["catch"](function(e){$("#registererror").removeClass("hidden")})},e.checkUsername=function(){}}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users")},t.login=function(r,n){return e.post("/api/sessions",{username:r,password:n}).then(function(r){return window.localStorage.midweekmanagertoken=r.data,e.defaults.headers.common["X-Auth"]=r.data,t.getUser()})},t.register=function(r,n,o,a,i,s,c){return e.post("/api/users",{username:r,email:n,firstname:o,surname:a,dateofbirth:i,mobilenumber:s,password:c}).then(function(){return t.login(r,c)})},t.logout=function(){window.localStorage.removeItem("midweekmanagertoken"),e.defaults.headers.common["X-Auth"]=""}}]);