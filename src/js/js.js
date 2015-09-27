$(function(){

    //Choose city
    $('.choose-city__current-city').click(function(){
        $(this).toggleClass('active');
        $('.cities').toggle();
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
    });

    //Tabs
    $('.tabs__tab__accordeon__item__title').click(function(e){
        e.preventDefault();
        var href =  $(this).attr('href');
        $(href).toggleClass('active');
        $('.tabs__tab__accordeon__item__body', href).slideToggle();
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
    ymaps.ready(function(){
        map = new ymaps.Map("yandex-map", {
            center: [55.76, 37.64],
            zoom: 10
        });
    });

    //Forms
    $('.form__placeholder').click(function(){
        $(this).addClass('focus');
        $(this).parent().find('input,textarea').focus();
    });
    $('.form input[type="text"], .form textarea').focus(function(){
        $(this).parent().find('.form__placeholder').addClass('focus');
    });
    $('.form input[type="text"], .form textarea').blur(function(){
        if ($(this).val() == '') {
            $(this).parent().find('.form__placeholder').removeClass('focus');
        }
    });
    $('.form input[type="text"], .form textarea').keyup(function(){
       if ($(this).val() != '') $(this).parent().addClass('ok');
        else $(this).parent().removeClass('ok');
    });

    $('.payment__row_radio label').click(function(){
        $(this).parent().find('label').removeClass('checked');
        $(this).addClass('checked');
        $(this).parent().parent().find('.payment__input_num').attr('placeholder', $('input', this).data('placeholder'));
    });

});

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