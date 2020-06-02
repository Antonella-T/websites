$(document).ready(function () {
    // MOBILE NAVIGATION start
    var windowObj = $(window);
    var header = $('.container > header');
    var body = $('body');

    function toggleElements() {
        header.toggleClass('show-menu');
        body.toggleClass('overflow-hidden');
    };

    $('.hamburger-menu, .navigation').on('click', function () {
        if (windowObj.width() <= 769) {
            toggleElements();
        }
    });

    // I want to ensure to always hide mobile navigation on desktop.
    windowObj.on('resize', function () {
        if (windowObj.width() > 769) {
            header.removeClass('show-menu');
            body.removeClass('overflow-hidden');
        }
    });
    // MOBILE NAVIGATION end
});