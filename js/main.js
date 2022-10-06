$(document).ready(function() {
   
    // slider 
    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // fade: true,
        cssEase: 'linear',
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ],
    });

    //modal 
    $('a.contacts_modal').click(function (event) {
        event.preventDefault();
        $('#myOverlay').fadeIn(297, function () {
            $('#myModal')
                .css('display', 'block')
                .animate({ opacity: 1 }, 198);
        });
    });
    $('#myModal__close, #myOverlay').click(function () {
        $('#myModal').animate({ opacity: 0 }, 198,
            function () {
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
            });
    });

    // anchors
    $(function () {
        $('a[href^="#about_me"]').click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
        $('a[href^="#skills"]').click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
        $('a[href^="#portfolio"]').click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
        $('a[href^="#contacts"]').click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });

    // nav fix
    $(document).scroll(function (e) {
        $(window).scrollTop() > 100 ? $('.nav').addClass('nav_color') : $('.nav').removeClass('nav_color');
    });

    // burger
    $('.mobile div').on('click', () => {
        $('.mobile div').toggleClass('active');
        $('.mobile nav').toggleClass('open');
        $('.mobile nav ul').toggleClass('show');
    });
    for (let a = 1; a <= $(".mobile ul li").length; a++) {
        $(".mobile ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
    }
    
});

