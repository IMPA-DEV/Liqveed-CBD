$(function() {

    // Page scroll to id
    $(".scroll-to a").mPageScroll2id({
        offset: 90,
        duration: 900
    });
    $(".scroll-to a[href='#testimonials']").mPageScroll2id({
        offset: 30,
    });

    if($(window).width() < 800){
        $(".scroll-to a[href='#main-form']").mPageScroll2id({
            offset: 50,
        });
    } else{
        $(".scroll-to a[href='#main-form']").mPageScroll2id({
            offset: 100,
        });
    }


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
        nextArrow: $('.testimonials-next'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // Mob menu
    if($(window).width() < 900){
        $('.header-mob, .close-nav, .header-nav a').click(function () {
            $('.header-nav').toggleClass('mobile');
            $('body').toggleClass('vh');
            $('.close').show(0);
        })
    }

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

    /* Form Ajax */
    $("#home-form").submit(function(e) { //Change
        e.preventDefault();
        var th = $(this);
        $.ajax({
            type: "POST",
            data: th.serialize()
        }).success(function() {
            console.log('success form');

            var fName =  $('input[name="Value1"]').val();
            var lName =  $('input[name="Value2"]').val();
            var fAddr =  $('input[name="Value3"]').val();
            var sAddr =  $('input[name="Value4"]').val();
            var zipS =  $('input[name="Value5"]').val();
            var phoneF =  $('input[name="Value6"]').val();
            var mailF =  $('input[name="Value7"]').val();
            var cityF =  $('input[name="Value8"]').val();
            var stateF =  $('select[name="Value9"]').val();

            try {

                localStorage.setItem('lName', lName);
                localStorage.setItem('fName', fName);
                localStorage.setItem('fAddr', fAddr);
                localStorage.setItem('sAddr', sAddr);
                localStorage.setItem('zipS', zipS);
                localStorage.setItem('phoneF', phoneF);
                localStorage.setItem('mailF', mailF);
                localStorage.setItem('cityF', cityF);
                localStorage.setItem('stateF', stateF);
            }
            catch(e) { alert(JSON.stringify(e))}

            window.location = "order.html";
        });
        return false;
    });

    /* order form from home form */
    var fName = localStorage.getItem('fName');
    var lName = localStorage.getItem('lName');
    var fAddr = localStorage.getItem('fAddr');
    var sAddr = localStorage.getItem('sAddr');
    var zipS = localStorage.getItem('zipS');
    var phoneF = localStorage.getItem('phoneF');
    var mailF = localStorage.getItem('mailF');
    var cityF = localStorage.getItem('cityF');
    var stateF = localStorage.getItem('stateF');

    $('input[name="Value1"]').val(fName);
    $('input[name="Value2"]').val(lName);
    $('input[name="Value3"]').val(fAddr);
    $('input[name="Value4"]').val(sAddr);
    $('input[name="Value5"]').val(zipS);
    $('input[name="Value6"]').val(phoneF);
    $('input[name="Value7"]').val(mailF);
    $('input[name="Value8"]').val(cityF);
    $('select[name="Value9"]').val(stateF);

    /* Count order product */
    var product_3 = 148;
    var product_2 = 99;
    var product_1 = 99;

    $('.count-number').on('change', function (){

        var cena_1 = $('#count-1').val();
        $('#cena-1').html(cena_1 * product_1);

        var cena_2 = $('#count-2').val();
        $('#cena-2').html(cena_2 * product_2);

        var cena_3 = $('#count-3').val();
        $('#cena-3').html(cena_3 * product_3);

        if(cena_1 > 0){
            $('.summery-list-1').show()
        } else {
            $('.summery-list-1').hide()
        }
        if(cena_2 > 0){
            $('.summery-list-2').show()
        } else {
            $('.summery-list-2').hide()
        }
        if(cena_3 > 0){
            $('.summery-list-3').show()
        } else {
            $('.summery-list-3').hide()
        }

        /* Total */
        $('#summery-total').html(cena_1 * product_1 + cena_2 * product_2 + cena_3 * product_3)
    });

});
