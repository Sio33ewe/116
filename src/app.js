


$('.hamburger-menu').click(()=>{
    menu_operation();
});
$('.shade').click(()=>{
    menu_operation();
});
$('.pc-batsu').click(()=>{
    menu_operation();
})
function menu_operation() {
    $('.menu').toggleClass('show_menu');
    $('body').toggleClass('body_lock')
    $('.hamburger-menu').toggleClass('close_menu');
    $('.shade').toggleClass('active_shade');
}

