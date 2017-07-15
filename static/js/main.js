'use strict';

$(function () {
    $('[data-slider="banner"]').flickity({
        pageDots: false,
        lazyLoad: true,
        autoPlay: 5000,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 45,
            x3: 35
        }
    });
});
"use strict";
"use strict";
'use strict';

$(function () {
    $('.search__btn_show').on('click', function () {
        $('.search').addClass('search_full');
        $('.search').children().show();
        $('.search__field').focus();
    });

    $('.search__btn_close').on('click', function () {
        $('.search_full').removeClass('search_full');
        $('.search').children().hide();
        $('.search__btn_show').show();
    });
});
'use strict';

$(function () {
    $('[data-slider="popular"]').flickity({
        lazyLoad: true,
        groupCells: 4,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 45,
            x3: 35
        }
    });
});
'use strict';

$(function () {
    $('[data-slider="article"]').flickity({
        lazyLoad: true,
        pageDots: false,
        wrapAround: true,
        arrowShape: {
            x0: 10,
            x1: 60, y1: 50,
            x2: 70, y2: 45,
            x3: 35
        }
    });

    var sliderData = $('[data-slider="article"]').flickity().data('flickity'),
        slides = sliderData.slides.length;
    $('[data-slider="article"]').append('<span class="slider-count"></span>');

    function slideCount() {
        var currentSlide = sliderData.selectedIndex + 1;
        $('.slider-count').html(currentSlide + '/' + slides);
    }

    slideCount();
    $('[data-slider="article"]').on('select.flickity', slideCount);
});
'use strict';

$(function () {
    function tabWork() {
        if ($(this).parent().hasClass('tab_active')) return;

        $('[data-tab]').hide();
        $('.tab_active').removeClass('tab_active');

        var currentTab = $('.tab__inp:checked'),
            value = $(currentTab).val();

        $(currentTab).parent().addClass('tab_active');
        $('[data-tab="' + value + '"]').fadeIn();
    }

    tabWork();
    $('.tab__inp').on('click', tabWork);
});