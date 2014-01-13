$(function() {

    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-flow-horizontal').before('<a class="mobile-trigger"><span></span></a>');
    $('.custom-menu-primary .hs-item-has-children > a').after('<a class="child-trigger"><span></span></a>');
    $('a.mobile-trigger').click(function() {
        $('.hs-menu-children-wrapper').hide(250);
        $(this).next('.custom-menu-primary .hs-menu-flow-horizontal').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('a.child-trigger').removeClass('child-open');        
        return false;
     });

    $('a.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').hide(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').hide(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('a.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

});