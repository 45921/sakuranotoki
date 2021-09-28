$(function() {
    if ($(".no-scroll").length) {
        $("body").css('overflow', 'hidden');
    } else {
        $("body").css('overflow', 'auto');
    }
});