/*Load Main view*/
$enterButton = $("#pageEnterButton");
$enterButton.on('click', function(){
    $elementHidden = $(".elementHidden");
    $header = $("header");
    $footer = $('footer');
    $enterButton.addClass("elementHidden");
    $header.animate({height:'12vh'},1000);
    $elementHidden.removeClass("elementHidden");
    $footer.animate({height: '5vh'},1000);
});

 /*Load sidebar*/
$dreamListBtn = $("#dreamListBtn");
$dreamListBtn.on('click', function(){
	$dreamList = $('.dreamList');
	$dreamList.toggleClass("hidePanel");
})

$taskListBtn = $("#taskListBtn");
$taskListBtn.on('click', function(){
	$taskList = $('.taskList');
	$taskList.toggleClass("hidePanel");
})

$todayTasksBtn = $("#todayTasksBtn");
$todayTasksBtn.on('click', function(){
	$todayTasks = $('.todayTasks');
	$todayTasks.toggleClass("hidePanel");
})

$importantBtn = $("#importantBtn");
$importantBtn.on('click', function(){
	$importantDates = $('.importantDates');
	$importantDates.toggleClass("hidePanel");
})

/*Change panel size*/
$panelBtn = $("panelLoader");
$panelBtn.on("click", function(){
	var hiddenPanels = $(".hidePanel");
	if (hiddenPanels.length == 1){
		$("#myBoard").removeClass().addClass("col-md-10");
	};
});
