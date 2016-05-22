var todo_calc_App = angular.module('todo_calc_App', []);
	var TodoListController = function($scope) {
		$scope.todos = [];
		$scope.lastChanged = '';

		$scope.addTodo = function(){
			$scope.todos.push({textSaved:$scope.todotext, editedText:'', done:false, isUpdating:false, statu:''});
      $scope.lastChanged = $scope.todos[$scope.todos.length-1].textSaved + " Added";
			$scope.todotext = '';
		}
		$scope.enableEditFunctionality = function(c){
			$scope.todos[c].isUpdating = true;
			$scope.todos[c].editedText = $scope.todos[c].textSaved;
		}

		$scope.saveToDoValue = function(c){
			$scope.todos[c].isUpdating = false;
			$scope.lastChanged = $scope.todos[c].textSaved + " changed to " + $scope.todos[c].editedText;
			$scope.todos[c].textSaved = $scope.todos[c].editedText;
			$scope.todos[c].editedText = '';
		}

		$scope.disableEditor = function(c){
			$scope.todos[c].editedText = $scope.todos[c].textSaved;
			$scope.todos[c].isUpdating = false;
		}
		$scope.todoRemove = function(c){
		  $scope.lastChanged = $scope.todos[c].textSaved + " Removed";
			$scope.todos.splice(c, 1);
			if ($scope.todos.length == 0) {
			  $scope.lastChanged = '';
			}
			}

		$scope.clearCompleted = function(c){
			$scope.todos = $scope.todos.filter(function(todo){
				return !todo.done
			})
		}
		$scope.sortCompleted = function(){
			$scope.sortType     = 'done'; // set the default sort type
			$scope.sortReverse  = false;  // set the default sort order
		}
	}

todo_calc_App.controller('TodoListController',TodoListController);
