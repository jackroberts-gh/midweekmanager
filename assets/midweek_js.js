var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope","$http","$location","UserSvc",function(e,t,r,n){null!=window.localStorage.getItem("token")&&(t.defaults.headers.common["X-Auth"]=window.localStorage.getItem("token"),n.getUser().success(function(t){e.currentUser=t})),e.$on("login",function(t,r){e.currentUser=r}),e.$on("logout",function(t,r){e.currentUser=""})}]),angular.module("app").controller("HomeCtrl",["$scope",function(e){}]),$(document).ready(function(){function e(){1==n?(r.hide(),t.removeClass("is-open"),t.addClass("is-closed"),n=!1):(r.show(),t.removeClass("is-closed"),t.addClass("is-open"),n=!0)}var t=$(".hamburger"),r=$(".overlay"),n=!1;t.click(function(){e()}),$('[data-toggle="offcanvas"]').click(function(){$("#wrapper").toggleClass("toggled")}),$(function(){var t=$("#sidebar-wrapper");t.on("click","a",null,function(){$("#wrapper").removeClass("toggled"),e()})})}),angular.module("app").config(["$httpProvider","$interpolateProvider","$routeProvider",function(e,t,r){e.interceptors.push("httpRequestInterceptor"),r.when("/",{controller:"HomeCtrl",templateUrl:"home.html"}).when("/createteam",{controller:"CreateTeamCtrl",templateUrl:"createteam.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/feed",{controller:"PostsCtrl",templateUrl:"posts.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/teams",{controller:"TeamCtrl",templateUrl:"teams.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/manage",{controller:"TeamCtrl",templateUrl:"manageteams.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/teams/:team_id",{controller:"MyTeamCtrl",templateUrl:"myteam.html",resolve:{user:["UserSvc",function(e){return e.getUser()}]}}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"}).when("/logout",{controller:"LogoutCtrl",template:""})}]).factory("httpRequestInterceptor",["$q","$location",function(e,t){return{responseError:function(r){return 401===r.status&&t.path("/login"),e.reject(r)}}}]),angular.module("app").service("PlayerService",["$http",function(e){this.fetchAll=function(){return e.get("/api/players")},this.fetchMyPlayers=function(t){return e.get("/api/players/"+t)},this.fetchPlayers=function(t){return e.get("/api/players/"+t)},this.fetchOne=function(t){return e.get("/api/players/:player_id",player_id)},this.create=function(t){return e.post("/api/players",{name:t}).then(function(e){})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsService",function(e,t){e.addPost=function(){e.postBody&&t.create({username:e.user,body:e.postBody}).success(function(t){e.posts.unshift(t),e.postBody=null})},t.fetch().success(function(t){e.posts=t})}]),angular.module("app").service("PostsService",["$http",function(e){this.fetch=function(){return e.get("/api/posts")},this.create=function(t){return e.post("/api/posts",t)}}]),angular.module("app").controller("CreateTeamCtrl",["$scope","UserSvc","TeamService",function(e,t,r){e.registerTeam=function(t,n,o){r.create(t,n,o,e.currentUser._id)}}]),angular.module("app").controller("MyTeamCtrl",["$scope","UserSvc","TeamService","$routeParams","$parse",function(e,t,r,n,o){e.icons=[],r.fetchOne(n.team_id).success(function(t){e.team=t,angular.forEach(e.team.players,function(t,r){void 0===e[t.position]?o(t.position).assign(e,1):e[t.position]++,e.icons.push(e[t.position])})}),e.positionOrder=function(e){switch(e.position){case"Goalkeeper":return 1;case"Defender":return 2;case"Midfielder":return 3;case"Forward":return 4}}}]),angular.module("app").controller("TeamCtrl",["$scope","$location","UserSvc","TeamService","PlayerService",function(e,t,r,n,o){n.fetchTeamsIManage(e.currentUser._id).success(function(t){e.teamsManaged=t,console.log("teams managed",t)}),o.fetchMyPlayers(e.currentUser._id).success(function(t){e.players=[],angular.forEach(t,function(t){e.players.push(t._id)}),n.fetchMyTeams(e.players).success(function(t){e.teamsPlayedFor=t,console.log("teams",t)})}),e.showTeam=function(e){t.path("/teams/"+e._id)}}]),angular.module("app").service("TeamService",["$http",function(e){this.fetchAll=function(){return e.get("/api/teams")},this.fetchTeamsIManage=function(t){return e.get("/api/teams/"+t)},this.fetchMyTeams=function(t){return console.log("passing this",t),e.get("/api/teams/myteams/"+t)},this.fetchOne=function(t){return e.get("/api/teams/team/"+t)},this.create=function(t,r,n,o){return e.post("/api/teams",{name:t,type:r,playday:n,manager:o}).then(function(e){window.location.href="/#/"})}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,t){e.login=function(r,n){t.login(r,n).then(function(t){e.$emit("login",t.data),window.location.href="/#/"})["catch"](function(e){$("#loginerror").removeClass("hidden")})}}]),angular.module("app").controller("LogoutCtrl",["$scope","UserSvc",function(e,t){t.logout(),e.$emit("logout"),window.location.href="/"}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(r,n,o,a,s,c,l){t.register(r,n,o,a,s,c,l).then(function(t){e.$emit("login",t.data),window.location.href="/#/"})},e.checkUsername=function(){}}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users")},t.login=function(r,n){return e.post("/api/sessions",{username:r,password:n}).then(function(r){return window.localStorage.token=r.data,e.defaults.headers.common["X-Auth"]=r.data,t.getUser()})},t.register=function(r,n,o,a,s,c,l){return e.post("/api/users",{username:r,email:n,firstname:o,surname:a,dateofbirth:s,mobilenumber:c,password:l}).then(function(){return t.login(r,l)})},t.logout=function(){window.localStorage.removeItem("token"),e.defaults.headers.common["X-Auth"]=""}}]);