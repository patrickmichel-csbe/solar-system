$(document).ready(function() {
    $('#burger_nav_icon').click(function(e) {
        const burgerNav = $('#burger_nav')
        if (burgerNav.hasClass('open')) {
            burgerNav.removeClass('open')
        } else {
            burgerNav.addClass('open')
        }
        e.preventDefault();
    })
})