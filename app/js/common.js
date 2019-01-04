$(function() {

    // Page scroll to id
    $(".scroll-to a").mPageScroll2id({
        offset: 90,
        duration: 900
    });
    // $.mPageScroll2id("scrollTo","#top",{
    //     offset:0
    // });

    //scroll top-link transparent
    $(function() {
        var header = $("#top-line");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 1) {
                header.addClass("scroll");
            } else {
                header.removeClass("scroll");
            }
            return false;
        });
    });

});
