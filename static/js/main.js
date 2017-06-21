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