var app = angular.module('todoApp', []);

app.controller('todoListController', ['$scope', '$filter', function($scope, $filter){


/*Przykładowa lista zadań*/
    $scope.todos = [
        {text: 'learn angular', done: false},
        {text: 'buy vegetables', done: false}
    ];

/*Licz elementy listy*/
    $scope.getTotalTodos = function(){
        return $scope.todos.length;
    };

/*Zostaw tylko nieukończone elementy (usuń ukończone) zamień stos*/
    $scope.clearCompleted = function(){
        $scope.todos = $filter('filter')($scope.todos, function(todo){
            return !todo.done;
        });
    };

/*Dodaj nowe zadanie do listy*/
    $scope.addToDo = function(){
        $scope.todos.push({text:$scope.formTodoText, done: false});
        $scope.formTodoText = '';
    };
}]);
