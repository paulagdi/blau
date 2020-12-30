(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-lightbox-gallery').cubeportfolio({
        filters: '#js-filters-lightbox-gallery2',
        // loadMore: '#js-loadMore-lightbox-gallery',
        // loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
          
            width: 767,
            cols: 4
        }, {

            width: 320,
            cols: 2
        }],
        defaultFilter: '*',
        animationType: 'rotateSides',
        gapHorizontal: matchMedia('(max-width: 767px)').matches ? 25 : 55,
        gapVertical: matchMedia('(max-width: 767px)').matches ? 25 : 65,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'default',
        // displayTypeSpeed: 400,
        filterDeeplinking:true,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '',

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
        singlePageInlineDeeplinking:true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {

                    t.updateSinglePageInline(result);

                })
                .fail(function() {
                    t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                });
        },
    });
})(jQuery, window, document);
