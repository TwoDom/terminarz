$(document).ready(function() {

    $board = $('.myBoard');

    $('.menuLoader').on('click', function(e) {
        var filename = $(this).data('file');

        $.get( getRealFilename(filename), function(data) {
            $board.html(data);
        } );
        return false;
    });


});

function getRealFilename(filename) {
    return 'views/' + filename + '.html';
}