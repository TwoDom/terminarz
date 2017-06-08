$(function(){

	function showInputWindow() {
		var inputEl = '';
		inputEl += '<div class="newWindow">';
		inputEl += '<input type="text" class="form-control" placeholder="Tytuł"/>';
		inputEl += '<button class="btn btn-primary btn-md acceptBtn">Dodaj</button>';
		inputEl += '<a class="close">X</a>';
		inputEl += '</div>';
		return inputEl;
	}

	/*Show input window into the right panel*/
	$(".addNew").on('click', function(e){
		e.preventDefault();
		$(this).hide();

		if ($('.newWindow').length > 0){
			return alert('Zapisz zmiany');
		}
		$(this).parent().append(showInputWindow());
	});


	/*Add new task to the list*/
	$(document).on('click','.acceptBtn',function(e){

		var inputValue = $(this).prev().val();
		if (inputValue.length > 0) {
			var elem = "<li class='newListEl'>"
			elem +="<span class='elTitle'> "+ inputValue +"</span></li>"
			$(this).parent().siblings("ul").append(elem);
		} else {
			return alert('Insert value');
		}
		$(this).next('a.close').trigger('click');

	});

	$(document).on('click', 'a.close', function(){
		$(this).parent().queue(function(){
			this.remove();
			$(".addNew").show();
		});
	});

	/*Count list elements*/
	// $(document).on('click', ".acceptBtn", function(e){
	// 	console.log($(event.target).parent().prev());
	// 	// var x = $($(event.target).parents().children("ul").children()).length + 1;
	// 	// 	console.log($(event.target).parents().children("ul").children());
	// 	// 	console.log($($(event.target).parents().children("ul").children()).length + 1);
	//
	// 	var amount = $(".newListEl").length;
	// 	$('span.tasks').text(amount);

	// amount++
	// console.log(amount)
	// console.log($(this).parents(".panel").find(".badge"))
	// $(this).parents(".panel").find(".badge").text(amount);
	// });
	// amount++
	// $($(this).parent().siblings(".panelHeader").children(".badge")).text(amount);

});


// function countListEl(){
// 	// var amount = $(this).parents(".panel").find("li.newListEl").length;
// 	console.log($(this).parents(".panel").find(".newListEl"));
// 	// return $('span.tasks').text(amount);
// }


/*****************************************************************************/
// /*Remove ended task from the list*/
//
// function markDone(){
//
// }
/*Defoult task list*/


// elem +="<span class='glyphicon glyphicon-heart'></span>"
// elem +="<span class='glyphicon glyphicon-ok'></span>"
// elem +="<span class='glyphicon glyphicon-pencil'></span>"
// elem +="<span class='glyphicon glyphicon-remove'></span>"

// inputEl += '<textarea name="description" rows="4"/>'
// inputEl += '<button class="btn btn-primary btn-md">Opis</button>';
// inputEl += '<button class="btn btn-primary btn-md"><span class="glyphicon glyphicon-heart"></span></button>';
// inputEl += '<button class="btn btn-primary btn-md">Termin</button>';
