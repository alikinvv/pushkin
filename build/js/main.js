
$(document).ready(function (){
    if ($(window).width() >= 1024) {
        new fullpage('#fullpage', {
            menu: '#mainmenu',
            anchors: ['first', 'about', 'menu', 'lunch', 'news', 'children', 'banquets', 'photo', 'reviews', 'contacts'],
            autoScrolling: true,
            scrollHorizontally: true,
            navigation: false,
            afterLoad: function (origin, destination, direction) {
                var loadedSection = this;

                if ($('.slide1').hasClass('active') || $('.slide3').hasClass('active') || $('.slide5').hasClass('active') || $('.slide7').hasClass('active') || $('.slide8').hasClass('active') || $('.slide10').hasClass('active')) {
                    $('.menu').removeClass('black');
                }

                if ($('.slide2').hasClass('active') || $('.slide4').hasClass('active') || $('.slide6').hasClass('active') || $('.slide9').hasClass('active')) {
                    $('.menu').addClass('black');
                }

                if ($('.slide2').hasClass('active') || $('.slide4').hasClass('active')) {
                    $('.mnu').removeClass('active')
                }
            }
        });
    }

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('a[data-menu]').click(function (e) {
        e.preventDefault();
        $('.mnu[data-menu="' + $(this).attr('data-menu') +'"]').addClass('active');
        $('.menu').addClass('black');
    });

    $('.mnu__back').click(function (e) {
        $('.mnu').removeClass('active')
        $('.menu').removeClass('black');
    });
});

$(window).load(function () {
    $('.logo').addClass('active');
});