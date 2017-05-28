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

// /*Load sidebars*/
// $dreamLoader = $('.dreamLoader');
// $dreamLoader.on('click', function(){
//
//    $dreamList = $('.dream-list');
//    $dreamList.removeClass('.hideColumn');
// });

$dreamListBtn = $("#dreamListBtn");
$dreamListBtn.on('click', function(){
	$dreamList = $('.dreamList');
	$dreamList.toggleClass("hideColumn");
})

$taskListBtn = $("#taskListBtn");
$taskListBtn.on('click', function(){
	$taskList = $('.taskList');
	$taskList.toggleClass("hideColumn");
})

$todayTasksBtn = $("#todayTasksBtn");
$todayTasksBtn.on('click', function(){
	$todayTasks = $('.todayTasks');
	$todayTasks.toggleClass("hideColumn");
})

$importantBtn = $("#importantBtn");
$importantBtn.on('click', function(){
	$importantDates = $('.importantDates');
	$importantDates.toggleClass("hideColumn");
})


function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;

      elem.style.left = pos + 'px';
    }
  }
}
// function myBoardSize(){
// 	if (el.hasClass == 'hideColumn') {
//
// 	} else {
//
// 	}
// }
