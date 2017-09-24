$(window).scroll(function() {
    if ($(this).scrollTop() >= 400) { // If page is scrolled more than 400px
        $('.top').fadeIn(300);    // Fade in the arrow
    } else {
        $('.top').fadeOut(300);   // Else fade out the arrow
    }
});
$(".top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1500);
});