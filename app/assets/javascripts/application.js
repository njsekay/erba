// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .
//= require wow
//= require jquery.slick

$(function(){ $(document).foundation(); });

$(function(){ new WOW().init(); });

$(function() {
    $('.scroller').slick({
      infinite: true,
  		dots:true,
  		slidesToShow: 1,
  		centerMode: true, //要素を中央寄せ
  		centerPadding:'240px', //両サイドの見えている部分のサイズ
  		autoplay:true, //自動再生
  		responsive: [{
  			breakpoint: 480,
  				settings: {
  					centerMode: false,
  			}
  		}]
    });
});
