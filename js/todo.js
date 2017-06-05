$(function(){

	/*Show input window*/
	$('.addNew').click(function(e){
		e.preventDefault();
		if ($('.addingWindow').length > 0){
			return alert('Zapisz zmiany');
		}
		$(showInputWindow()).appendTo('.nowa');
	});

	/*Add new task to the list*/
	$(document).on('click','.acceptBtn',function(e){
		console.log('hej');
		var listEl = $('.acceptBtn').prev().val();

		function addElement(){
			var elem = '';
			elem = "<li><input type='checkbox'></input>"
			elem +="<span class='titleEl'>"+ listEl +"</span>"
			elem +="<span class='glyphicon glyphicon-heart'></span>"
			elem +="<span class='glyphicon glyphicon-ok'></span>"
			elem +="<span class='glyphicon glyphicon-pencil'></span>"
			elem +="<span class='glyphicon glyphicon-remove'></span>"
			elem +="</li>"
			return elem;
		}
		$(addElement()).appendTo('.nowa');
	});

	/*Count list elements*/
	var amount = $('.titleEl').length;
	$('span.tasks').text(amount);

});

function showInputWindow() {

	var inputEl = '';

	inputEl += "<li class='addingWindow'>";
	inputEl += '<input type="text" class="form-control"/>';
	// inputEl += '<textarea name="description" rows="4"/>'
	// inputEl += '<button class="btn btn-primary btn-md">Opis</button>';
	// inputEl += '<button class="btn btn-primary btn-md"><span class="glyphicon glyphicon-heart"></span></button>';
	// inputEl += '<button class="btn btn-primary btn-md">Termin</button>';
	inputEl += '<button class="btn btn-primary btn-md acceptBtn">Dodaj</button>';
	inputEl += '<a class="close">X</a>';
	inputEl += '</li>';
	return inputEl;
	// $('.nowa').append(inputEl);
}


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
