$(function () {
    feather.replace();

    const VISUAL_SLIDE = new Swiper('.MainVisual .visual_slide', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

        on: {
            init: function () {
            },
            slideChangeTransitionEnd: function () {
                console.log(this.realIndex);
                document.querySelector('.progress_bar span').innerHTML = `0${this.realIndex + 1}`;
            }
        }
    })

    $('.MainVisual .arrows .left').on('click', function () {
        VISUAL_SLIDE.slidePrev();
    })
    $('.MainVisual .arrows .right').on('click', function () {
        VISUAL_SLIDE.slideNext();
    })


    $('.MainVisual .control_box .pause').on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            VISUAL_SLIDE.autoplay.stop();
        } else {
            VISUAL_SLIDE.autoplay.start();
        }
    })


    const EVENT_SLIDE = new Swiper('.MainEvent .tab_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 4,  //브라우저가 768보다 클 때
            },

            500: {
                slidesPerView: 3,  //브라우저가 500보다 클 때
            },
        },
    })

    $('.MainEvent .left_con .tab_menu>li a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        $('.MainEvent .left_con .tab_menu>li').eq(IDX).addClass('on').siblings().removeClass('on');
        $('.MainEvent .right_con .tab_slide').eq(IDX).addClass('on').siblings().removeClass('on');
    })

    const SNS_SLIDE = new Swiper('.MainStory .sns_content .sns_slide', {
        slidesPerView: 3.5,
        spaceBetween: 30,
        breakpoints: {
            1200: {
                slidesPerView: 3.5,
            },

            768: {
                slidesPerView: 3,
            },

            500: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        },
    })

    $('.MainStory .arrows .left').on('click', function () {
        SNS_SLIDE.slidePrev();
    })
    $('.MainStory .arrows .right').on('click', function () {
        SNS_SLIDE.slideNext();
    })




    $('#Header .m_btn .hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#Header .header_wrap .gnb').toggleClass('on');
        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            if ($('#Header .header_wrap').hasClass('on')) {
                $('#Header .header_wrap').removeClass('on');
            } else {
                return;
            }
        } else {
            $('#Header .header_wrap').addClass('on');
        }
    })

    $('#Header .header_wrap .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            $('#Header .header_wrap .gnb .depth2').eq(IDX).toggleClass('on');
            if ($('#Header .header_wrap .gnb .depth2').eq(IDX).hasClass('on')) {
                $('#Header .header_wrap .gnb .depth2').eq(IDX).slideDown();
            } else {
                $('#Header .header_wrap .gnb .depth2').eq(IDX).slideUp();
            }
        } else {
            return
        }
    })

    $('#Header').on('wheel touchmove', function (e) {
        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            e.preventDefault();
        }
    })

    $(window).on('scroll', function () {
        const SCT = $(window).scrollTop();
        if (SCT > 0) {
            if ($('#Header .header_wrap .gnb').hasClass('on')) {
                $('#Header .header_wrap').removeClass('on');
            } else {
                $('#Header .header_wrap').addClass('on');

            }
        }
        else {
            $('#Header .header_wrap').removeClass('on');
        }
    })
})