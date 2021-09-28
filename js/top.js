$(window).on('load resize', function() {
    var position = ($("#mainvisual_area .smart").outerWidth() - $(window).width()) / 2;
    $("#mainvisual_area").scrollLeft(position);
});