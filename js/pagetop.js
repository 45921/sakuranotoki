$(function() {
    $(document).ready(function() {

        var pagetop = $('#pagetop')
        pagetop.hide()
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function() {
            if ($('.pagetop').is(":animated")) return;
            $('body, html').not(":animated").animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});