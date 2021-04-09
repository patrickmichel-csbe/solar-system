$(document).ready(function() {
    $('#nav_btn').click(function(e) {
        const nav = $('#nav')
        if (nav.hasClass('open')) {
            nav.removeClass('open')
        } else {
            nav.addClass('open')
        }
        e.preventDefault();
    })
})