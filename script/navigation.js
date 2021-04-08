$(document).ready(function() {
    $('#burger_nav_icon').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open')
            $('#burger_nav').removeClass('open')
        } else {
            $(this).addClass('open')
            $('#burger_nav').addClass('open')
        }
    })
})