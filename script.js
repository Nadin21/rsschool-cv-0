$(document).ready(function () {
    $('a[href^="#"]').bind("click", function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });
    let button = $('.button_up');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('.head_nav_burger').click(function(){
        $(this).toggleClass('open');
        $('.head_nav').toggleClass('open_menu');
    });
});