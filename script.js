$(document).ready(function () {
    $('a[href^="#"]').bind("click", function (e) {
        let anchor = $(this);
        let heightNav = 0;
        if ($(this).closest('.open_menu')) {
            $('.head_nav_burger').removeClass('open');
            $('.head_nav').removeClass('open_menu');
            heightNav = $('.head_nav_burger').height() + 10;
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - heightNav
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
    $('.head_nav_burger').click(function () {
        $(this).toggleClass('open');
        $('.head_nav').toggleClass('open_menu');
    });
});