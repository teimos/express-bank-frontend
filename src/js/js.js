$(function(){

    // Pay Button
    $('.pay-btn').click(function(){
        $('#loading').show();
        return false;
    });

    // Overlay trigger
    $('#overlay').click(function() {
        $(this).removeClass('active');
        $('.modal-opened').hide().removeClass('modal-opened');
        $('.choose-city__current-city').removeClass('active');
    });

    //Choose city
    $('.choose-city__current-city').click(function(){
        $('#overlay').toggleClass('active');
        $(this).toggleClass('active');
        $('.cities').toggle().toggleClass('modal-opened');
    });

    //Main menu
    $('.main-menu__link').click(function(e){
        e.preventDefault();
        $('.main-menu .active').removeClass('active');
        $(this).parents('.main-menu__column').addClass('active');
        $(this).addClass('active');
        var href =  $(this).attr('href');
        $('.tabs__tab').removeClass('active');
        $(href).addClass('active');
        $.scrollTo('.main-menu', 500);

        msnry();

        if(history.pushState) {
            history.pushState(null, null, href);
        } else {
            window.location.hash = href;
        }

        return false;
    });

    //Tabs
    $('.tabs__tab__accordeon__item__title').click(function(e){
        e.preventDefault();
        var href =  $(this).attr('href');
        $(href).toggleClass('active');
        $('.tabs__tab__accordeon__item__body', href).slideToggle(function(){
            if ($(this).css('display') == 'block') {
                $.scrollTo(href, 500);
            }
        });
    });

    //Accordeons
    $('.spoilers__item__title').click(function(e){
        e.preventDefault();
        var el = $(this).parent();
        $(el).toggleClass('active');
        $('.spoilers__item__text', el).slideToggle();
    });

    //Payment Systems
    $('.payment-systems__items__item').click(function(e){
        e.preventDefault();
        var href =  $(this).attr('href');
        $('.payment-systems__items__item').removeClass('active');
        $('.payment-systems__blocks__item').removeClass('active');
        $(this).addClass('active');
        $(href).addClass('active');
    });

    //Fit slider
    scaleSlider();
    $(window).resize(function(){
        scaleSlider();
    });

    // Slider
    $('.promo__slider').unslider({
        keys: false,
        dots: true,
        fluid: false // Support responsive design. May break non-responsive designs
    });

    //Dropdowns
    $('.select').selectize({
        create: false,
        readOnly: true,
        onDelete: function() { return false }
    });

    //Yandex Map
    if (typeof ymaps != 'undefined' && $('#yandex-map').size() > 0) {
        ymaps.ready(function(){
            map = new ymaps.Map("yandex-map", {
                center: [55.76, 37.64],
                zoom: 10
            });

            msnry();
        });
    }

    $('.map__search__input').focus(function(){
        $(this).parent().addClass('focus');
    });
    $('.map__search__input').blur(function(){
        $(this).parent().removeClass('focus');
    });

    //Forms
    $('.form__placeholder').click(function(){
        $(this).addClass('focus');
        $(this).parent().find('input,textarea').focus();
    });
    $('form input[type="text"], .form textarea').focus(function(){
        $(this).parent().find('.form__placeholder').addClass('focus');
    });
    $('form input[type="text"], .form textarea').blur(function(){
        if ($(this).val() == '') {
            $(this).parent().find('.form__placeholder').removeClass('focus');
        }
    });
    $('form input[type="text"], .form textarea').keyup(function(){
       if ($(this).val() != '') $(this).parent().addClass('ok');
        else $(this).parent().removeClass('ok');
    });

    $('.payment__row_radio label').click(function(){
        var target = $('input', this).data('target');
        if (target) {
            $(this).parents('.payment').find('.block').removeClass('active');
            $(this).parents('.payment').find('.' + target).addClass('active');
        }
        $(this).parent().find('label').removeClass('checked');
        $(this).addClass('checked');
        $(this).parent().parent().find('.payment__input_num').parent().find('.form__placeholder').text($('input', this).data('placeholder')); //Sorry for this... =\ deadline-driven development!
    });

    // Percents write-off
    $('.payment__input[name="summ"]').keyup(function(){
        var commissionContainer = $(this).parents('form').find('.commission span');
        var writeoffContainer = $(this).parents('form').find('.writeoff span');
        var percent = parseFloat($(this).parents('form').find('.commission-container').data('percent'));
        var val = parseFloat($(this).val());
        var commission = (val / 100) * percent;
        var writeoff = val + commission;
        if (!commission) commission = 0;
        if (!writeoff) writeoff = 0;
        commissionContainer.text(commission.toFixed(2));
        writeoffContainer.text(writeoff.toFixed(2));
    });

    // Hash navigation

    if(window.location.hash) {
        var hash = window.location.hash; //Puts hash in variable, and removes the # character
        $('a[href="'+hash+'"]').click();
    }

});

function msnry() {
    //Masonry map items
    $('.map__items').masonry({
        itemSelector: '.map__items__item',
        transitionDuration: 0
    });
}

function scaleSlider(){
    var t = $('.promo__slider__container');
    var p = t.parent();

    var tw = 760;
    var th = 330;
    var pw = p.width();

    var coeff =  pw/tw;

    if (coeff > 1) {
        coeff = 1;
    }
    else
    {
        var ml = (tw - tw*coeff) / 2;
        t.css('margin-left', '-'+ml+'px');

        var mt = (th - th*coeff) / 2;
        p.css('top', '-'+mt+'px');

        var ph = th*coeff;
        p.height(ph);

        t.css('position', 'absolute');
    }

    t.css('transform', 'scale('+coeff+')');
}
