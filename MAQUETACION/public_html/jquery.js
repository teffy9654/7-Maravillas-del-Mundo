$(document).ready(function() {
    $('.btnMoreInfo').click(function() {
        var info = $(this).siblings('.info');
        info.slideToggle();
    });
});
