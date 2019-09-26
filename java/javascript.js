/*global $ alert console */
$(function () {
    'use strict';
    // trigger nice scroll
    $('html').niceScroll();
    // عشان اخلي الباك جروند تملي الصفحه
    $('header').height($(window).height());
    // عشان ادوس ينقل عللي السيكشن الي بعدو
    $('header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('#features').offset().top
        },1000);
    });
//    show hidden 
   $('.show-more').click(function(){
        $('#our-work .hidden').fadeIn(1000);
    });
    // chek testimonas
    // start section testim
    var leftArrow = $('#testim .fa-chevron-left') ,
        rightArrow = $('#testim .fa-chevron-right');

    function checkClients() {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }
    checkClients();
   $('#testim i').click(function(){
       if ($(this).hasClass('fa-chevron-right')){
           $('#testim .active').fadeOut(100, function(){
               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
               checkClients();
           });
       }else{
        $('#testim .active').fadeOut(100, function(){
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            checkClients();
        });
       }
   });
//    end section testim

});