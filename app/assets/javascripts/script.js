/*
Title: Main Scripts
Theme Name: Ashoka
Author Name: GeeksLabs
Author URI: http://themeforest.net/user/geekslabs
Website: http://geekslabs.com
*/

$(function(){

    

    //Logo fadeIn fadeOut on 
    $(window).scroll(function(){
      if($(this).scrollTop() > $(window).height()/2.2) $('.logo-wrapper').fadeOut('slow');
      if($(this).scrollTop() < $(window).height()/2.2) $('.logo-wrapper').fadeIn('slow');
    });




 




});

