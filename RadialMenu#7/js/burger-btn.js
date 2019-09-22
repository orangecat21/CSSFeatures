$('.menu-btn').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('menu-btn-active');
    $('.menu').toggleClass('menu-active');
});