$(document).ready(function(){
    var images = $('.profile-img');
    images.height(images.width() + 'px');
    console.log();
});

$(window).on('resize', function(){
    var images = $('.profile-img');
    images.height(images.width() + 'px');
    console.log();
});