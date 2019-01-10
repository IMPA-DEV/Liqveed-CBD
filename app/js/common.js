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

    /* slick slider */
    $('.testimonials-slider').slick({
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.testimonials-prev'),
        nextArrow: $('.testimonials-next')
    });

    /* check form final step payment */
    $('#form-check__address').on('click', function () {
        var payAdr = $('.payment-form__address');
        if ($(this).is(':checked')) {
            payAdr.slideUp(300);
        } else {
            payAdr.slideDown(300);
            payAdr.children('input').each(function () {
                $(this).prop('required', true);
            });
        }
    });
});
