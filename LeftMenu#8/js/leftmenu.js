$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $('.content').toggleClass('content-active');
})