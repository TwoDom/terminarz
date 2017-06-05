$(function(){
		/*Wysuwane menu*/
     $('#navLeft > ul > li > a').click(function(e){

         if ($(this).next().length > 0) {
             e.preventDefault();
             if ($(this).hasClass('active')) {
                 $(this).removeClass('active');
                 $(this).next('li').slideUp();
             }
             else {
                 $(this).addClass('active');
                 $(this).next('li').slideDown();
             }
         }
     });

		/*Narysuj okno, które pozwoli na wprowadzanie danych*/
		/*Jeśli okno jest otwarte zapobiegaj ponownemu otwarciu okna*/
    $('.addButton a').click(function(e){
        e.preventDefault();
        if ($('.communicate').length > 0) {
            return alert('Zapisz zmiany');
        }
        $(narysujOkienko()).appendTo('ul').fadeIn(700);
    });

    $(document).on('click', '.communicate button', function(){
        var cnt = $(this).prev().val();
        if (cnt.length < 3) {
            return alert('No podaj goopcze jakąś sensowną wartość');
        }
        if ($('h1.zInputa').length > 0) {
            var ans = prompt('Element już istnieje - podmienić (T) czu dodać kolejny (N)');
            if (ans.toUpperCase() === 'T') {
                $('h1.zInputa').text(cnt);
            }
            else if (ans.toUpperCase() === 'N') {
                $('<h1 class="zInputa">' + cnt + '</h1>').appendTo('#content');
            }
            else {
                return alert('Naprawdę masz niższe IQ niż rozmiar buta');
            }
        }
        else {
            $('<h1 class="zInputa">' + cnt + '</h1>').appendTo('#content');
        }
        $(this).next('a.close').trigger('click');
    });

    $(document).on('click', 'a.close', function(){
        $(this).parent().fadeOut().queue(function(){
            this.remove();
        });
    });
//    $(narysujOkienko()).appendTo('body');
});




function narysujOkienko(cnt) {

    var content = '';

    content += '<div class="communicate" style="display: none;">';
//        content += cnt;
        content += '<input type="text" class="form-control" />';
        content += '<button class="btn btn-primary">Wgraj</button>';
        content += '<a class="close">X</a>';
    content += '</div>';

    return content;
}
