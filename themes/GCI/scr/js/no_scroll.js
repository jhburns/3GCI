// A work-around to fix bootstrap 4 not preventing background scroll
// on element #navbarSupportedContent in navbar.html partial
//V0.0.1

$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").css("overflow","scroll");
    $('#carouselExampleControls').carousel('cycle');
});

$('#navbarSupportedContent').on('show.bs.collapse', function () {
    $("body").css("overflow","hidden");
    $('#carouselExampleControls').carousel('pause');
});