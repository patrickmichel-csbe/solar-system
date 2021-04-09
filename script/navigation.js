$(document).ready(function() {
    $('#nav_btn').click(function() {
        if ($('#nav').hasClass('open')) {
            $('#nav').removeClass('open')
        } else {
            $('#nav').addClass('open')
        }
    })
})