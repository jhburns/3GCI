// A work-around to fix bootstrap 4 not preventing background scroll
// on element #navbarSupportedContent in navbar.html partial
// Also now handles pausing carousel and changing out the burger icon for color
//V0.1.0


$('#navbarSupportedContent').on('show.bs.collapse', function () {
    $("body").css("overflow","hidden");
    $('#carouselExampleControls').carousel('pause');

    $('#burger-default').hide();

    //The display property is done like this to prevent rendering issues when loaded and clicked
    var $burger_active = $('#burger-active');
    $burger_active.show();
    $burger_active.removeClass("d-none");
});

$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    $("body").css("overflow","scroll");
    $('#carouselExampleControls').carousel('cycle');

    $('#burger-default').show();
    $('#burger-active').hide();
});

//To prevent no being able to scroll if menu is opened when small, then resized to be larger
$(window).resize(function() {

    //Is needed to prevent background scroll when modal is open and resized
    if ($('#input_desk').is(":visible") && !$('#search_modal').is(":visible")) {
        $("body").css("overflow","scroll");
        $('#carouselExampleControls').carousel('cycle');
    }

    //Prevents background scroll when menu is already open and screen is resized back to menu state
    if ($('#mobile_search').is(":visible")) {
        $("body").css("overflow","hidden");
        $('#carouselExampleControls').carousel('pause');
    }
});

//Restarts the slideshow after closing the search modal
$('#search_modal').on('hidden.bs.modal', function () {
    $("body").css("overflow","scroll");
    $('#carouselExampleControls').carousel('cycle');
});