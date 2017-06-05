/*Count list elements*/
/*Add new task to the list*/

$(function(){
	$(document).on('click','.addNew',function(e){
		showInputWindow();
	});

});


function showInputWindow() {

    var inputEl = '';

	  	inputEl += "<li>";
	      inputEl += '<input type="text" class="form-control"/>';
				inputEl += '<textarea name="description" rows="4"/>'
	      inputEl += '<button class="btn btn-primary btn-md">Opis</button>';
				inputEl += '<button class="btn btn-primary btn-md"><span class="glyphicon glyphicon-heart"></span></button>';
				inputEl += '<button class="btn btn-primary btn-md">Termin</button>';
				inputEl += '<button class="btn btn-primary btn-md">Dodaj</button>';
	     	inputEl += '<a class="close">X</a>';
    	inputEl += '</li>';

    $('.nowa').append(inputEl);
};













// var elem = '';
//  	elem = "<li><input type="checkbox"></input>"
// 	elem +="<span class="title">"+ TaskFromInput+"</span>"
// 	elem +="<span class="glyphicon glyphicon-heart"></span>"
// 	elem +="<span class="glyphicon glyphicon-ok"></span>"
// 	elem +="<span class="glyphicon glyphicon-pencil"></span>"
// 	elem +="<span class="glyphicon glyphicon-remove"></span>"
// elem +="</li>"
// }
// /*Remove ended task from the list*/
//
// function markDone(){
//
// }









/*Defoult task list*/


// var app = angular.module('todoApp', []);
//
// app.controller('todoListController', ['$scope', '$filter', function($scope, $filter){
//
//
// /*Przykładowa lista zadań*/
//     $scope.todos = [
//         {text: 'learn angular', done: false},
//         {text: 'buy vegetables', done: false}
//     ];
//
// /*Licz elementy listy*/
//     $scope.getTotalTodos = function(){
//         return $scope.todos.length;
//     };
//
// /*Zostaw tylko nieukończone elementy (usuń ukończone) zamień stos*/
//     $scope.clearCompleted = function(){
//         $scope.todos = $filter('filter')($scope.todos, function(todo){
//             return !todo.done;
//         });
//     };
//
// /*Dodaj nowe zadanie do listy*/
//     $scope.addToDo = function(){
//         $scope.todos.push({text:$scope.formTodoText, done: false});
//         $scope.formTodoText = '';
//     };
//
//
// }]);
