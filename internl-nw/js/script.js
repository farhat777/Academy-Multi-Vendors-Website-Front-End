jQuery("#carousel-two").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 60,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 3,  margin: 0
    },

    600: {
      items: 4
    },

    1024: {
      items: 6
    }
  }
});

jQuery("#well-carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: true,
  navText: [
    "<img src='images/intr-round-arr.svg' alt=''>",
    "<img src='images/intr-round-arr.svg' alt=''>",
   ],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    }
  }
});


jQuery("#list-carasol").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  autoWidth:true,
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,  margin: 0,stagePadding: 20
    },

    600: {
      items: 2
    },

    1024: {
      items: 6
    }
  }
});



jQuery("#list-carasol2").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: false,
  autoWidth:true,
  margin: 0,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,  margin: 0
    },

    600: {
      items: 3
    },

    1024: {
      items: 6
    }
  }
});



jQuery("#carousel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 12,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1.8
    },

    600: {
      items: 3
    },

    1024: {
      items: 5
    }
  }
});


jQuery("#carousel2").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 12,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1.8
    },

    600: {
      items: 3
    },

    1024: {
      items: 5
    }
  }
});

jQuery("#carousel3").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    }
  }
});

jQuery("#carousel33").owlCarousel({
	
  autoplay: false,
  lazyLoad: true,
  loop: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav: false,
    items:2,
    loop:true,
    margin:10,

  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsive: {
    0: {
      items: 1,
	  stagePadding: 40
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    }
  }
});

$('.hmbrgr.three').hmbrgr({
  width     : 25,
  height    : 21,
  barHeight : 2,
  barRadius : 1.5,
  barColor  : 'white'
});


/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      // .toggleClass('fa-angle-down fa-angle-up');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

// JavaScript for label effects only


$( document ).ready(function() {
  $(".input-effect  input").val("");
  $(".input-effect  textarea").val("");
  $(".input-effect  select").val("");

  var textContent = " •  Dies ist ein Beispieltext für ein Langes  elend langes Textfeld.\n •  Dies ist ein Beispieltext für ein Langes   elend langes Textfeld.\n •  Dies ist ein Beispieltext für ein Langes  elend langes Textfeld.\n •  Dies ist ein Beispieltext für ein Langes   elend langes Textfeld.";
$("#mitteilen1").val(textContent);
$("#mitteilen1s2").val(textContent);
$("#mitteilen12").val(textContent);
  
  $(".input-effect input").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  })

  $("#cv").change(function(){
    $('#cv-val').css('display','flex');
    $('#cv-val').text(this.value.replace(/C:\\fakepath\\/i, ''))
 })   

 $('#cv-img').click(function(){
  $("#cv").trigger('click');
  $("#cv").focus();
})

$('#cv-img').click(function(){
  $("#cv").trigger('click');
  $("#cv").focus();
})

$('#anlagen-img').click(function(){
  $("#anlagen").trigger('click');
  $("#anlagen").focus();
})


 $("#anlagen").change(function(){
  $('#anlagen-val').css('display','flex');
  $('#anlagen-val').text(this.value.replace(/C:\\fakepath\\/i, ''))
})   



  $(".input-effect textarea").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  })

  $(".input-effect select").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  })

  $(".toggle-password").click(function() {

    // $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
      $(this).attr("src", "images/pass-eyeslash.svg");
    } else {
      input.attr("type", "password");
      $(this).attr("src", "images/pss-eye.svg");
      
    }
  });

  $("div.crd-sel").hide();
  $("div#showOne").show();


  $('.my-radio input[type="radio"]').click(function(){
    var demovalue = $(this).val(); 
      $("div.crd-sel").hide();
      $("#show"+demovalue).show();
  });


  $('.show-menu-right').click(function(){
    event.preventDefault();
    $('.sliding-mobile-mn').toggleClass('show');
    $('.sliding-mobile-mn').parent().css('position','static');
  });


  $('.show-menu-left-intr').click(function(){
    event.preventDefault();
    $('.mobile-itr').toggleClass('show');
    $('body').toggleClass('ovrflw-hid');
  });


  $('.cat-ac-had').click(function(){
    event.preventDefault();
    $(this).parent().toggleClass('show');
  });


  


$(window).scroll(function(){
      if ($(window).scrollTop() >= 54) {
          $('.header-blue .navbar').addClass('fixed-header');
          $('.header-ul').addClass('fixed-header-ul');
          $('.mob-pr').addClass('fixed-pr');
          
          if($('.header-blue.bg-transparent .navbar-brand img[src="images/p-logo.svg"]')){
             $(".header-blue.bg-transparent .navbar-brand img").attr("src", "images/black-logo.svg");
          }
          if($('.header-blue.bg-skublue .navbar-brand img[src="images/p-logo.svg"]')){
            $(".header-blue.bg-skublue .navbar-brand img").attr("src", "images/black-logo.svg");
         }
          
          if($('.header-blue.bg-transparent .navbar .form-inline .btn img[src="images/wh-hd-sq.svg"]')){
            $(".header-blue.bg-transparent .navbar .form-inline .btn img").attr("src", "images/bl-hd-sq.svg");
         }

         if($('.header-blue.bg-transparent .navbar .mbl-srch img[src="images/wh-hd-sq.svg"]')){
          $(".header-blue.bg-transparent .navbar .mbl-srch img").attr("src", "images/bl-hd-sq.svg");
       }

         

         if($('.header-blue.bg-transparent .navbar-text img[src="images/cart-icon.svg"]')){
          $(".header-blue.bg-transparent .navbar-text img").attr("src", "images/black-cart.svg");
       }

       if($('.header-blue.bg-transparent .action-button img[src="images/user-icon.svg"]')){
        $(".header-blue.bg-transparent .action-button img").attr("src", "images/user-icon-black.svg");
       }

       if($('.header-blue.bg-skublue .navbar .form-inline .btn img[src="images/wh-hd-sq.svg"]')){
        $(".header-blue.bg-skublue .navbar .form-inline .btn img").attr("src", "images/bl-hd-sq.svg");
     }

     if($('.header-blue.bg-skublue .navbar .mbl-srch img[src="images/wh-hd-sq.svg"]')){
      $(".header-blue.bg-skublue .navbar .mbl-srch img").attr("src", "images/bl-hd-sq.svg");
    }

       if($('.header-blue.bg-skublue .navbar-text img[src="images/cart-icon.svg"]')){
        $(".header-blue.bg-skublue .navbar-text img").attr("src", "images/black-cart.svg");
     }

     if($('.header-blue.bg-skublue .action-button img[src="images/user-icon.svg"]')){
      $(".header-blue.bg-skublue .action-button img").attr("src", "images/user-icon-black.svg");
     }

          
      }
      else {
          $('.header-blue .navbar').removeClass('fixed-header');
          $('.header-ul').removeClass('fixed-header-ul');
          $('.mob-pr').removeClass('fixed-pr');

          if($('.header-blue.bg-transparent .navbar-brand img[src="images/black-logo.svg"]')){  
            $(".header-blue.bg-transparent .navbar-brand img").attr("src", "images/p-logo.svg");
          }

          
          if($('.header-blue.bg-skublue .navbar-brand img[src="images/black-logo.svg"]')){  
            $(".header-blue.bg-skublue .navbar-brand img").attr("src", "images/p-logo.svg");
          }

          if($('.header-blue.bg-transparent .navbar .form-inline .btn img[src="images/bl-hd-sq.svg"]')){
            $(".header-blue.bg-transparent .navbar .form-inline .btn img").attr("src", "images/wh-hd-sq.svg");
         }

         if($('.header-blue.bg-transparent .navbar .mbl-srch img[src="images/bl-hd-sq.svg"]')){
          $(".header-blue.bg-transparent .navbar .mbl-srch img").attr("src", "images/wh-hd-sq.svg");
       }

         if($('.header-blue.bg-transparent .navbar-text img[src="images/black-cart.svg"]')){
          $(".header-blue.bg-transparent .navbar-text img").attr("src", "images/cart-icon.svg");
       }

       if($('.header-blue.bg-transparent .action-button img[src="images/user-icon-black.svg"]')){
        $(".header-blue.bg-transparent .action-button img").attr("src", "images/user-icon.svg");
       }


       if($('.header-blue.bg-skublue .navbar .form-inline .btn img[src="images/bl-hd-sq.svg"]')){
        $(".header-blue.bg-skublue .navbar .form-inline .btn img").attr("src", "images/wh-hd-sq.svg");
     }

     if($('.header-blue.bg-skublue .navbar .mbl-srch img[src="images/bl-hd-sq.svg"]')){
      $(".header-blue.bg-skublue .navbar .mbl-srch img").attr("src", "images/wh-hd-sq.svg");
    }

     if($('.header-blue.bg-skublue .navbar-text img[src="images/black-cart.svg"]')){
      $(".header-blue.bg-skublue .navbar-text img").attr("src", "images/cart-icon.svg");
    }

    if($('.header-blue.bg-skublue .action-button img[src="images/user-icon-black.svg"]')){
    $(".header-blue.bg-skublue .action-button img").attr("src", "images/user-icon.svg");
    }

      }

});

  


  htmlInputRange.options({
    tooltip: true,
    max: 90,
    labels: true,
    labelsData: {
      one: 'one',
      two: 'two'
    }
  });

});


// range slider js 
const inputRange = $('#html-input-range');
let htmlInputRange = {
  idNotThere : '<p>Note: Missing input tag id name e.g html-input-range</p>',
  init () {
    if (inputRange.length > 0) {
      let inputRanges = $('#html-input-range');
      inputRanges.parent().addClass('html-inupt-range');
      // if too many input ranges there for now hiding this part.
      // inputRanges.each(function( index ) {
      //   let $this = $(this);
      // });
      let $this = inputRanges;
        // default input range starts at 0 and ends at 100
        $this.attr({
          min: 0,
          max: 100,
          value: 0,
          step: 1
        });
    } else {
      $('input[type=range]').parent().append(htmlInputRange.idNotThere);
    }
  },
  options (inputs) {
    htmlInputRange.init();
    let options = inputs;
    // custom tracker
    $('input[type=range]').parent().addClass('html-input-range-custom');
    $('input[type=range]').parent().append('<div class="hir-tracker-bg"></div><div class="hir-tracker-thumb"></div>');
    let min = 10;
    let max = 100;
    if (options.tooltip === true) {
      if (options.max) {
        max = options.max;
        $(inputRange).attr({
          max: options.max
        });
      }
      $('input[type=range]').parent().append('<div class="tooltip">'+ min +'</div>');
    }
    if (options.labels === true) {
      $(inputRange).parent().append('<ul class="hir-labels"></ul>');
      let setWidth;
      if (options.max) {
        setWidth = options.max/10;
      } else {
        setWidth = max/10; 
      }
      for (let i = 0; i < setWidth; i++) {
        $('.hir-labels').append('<li class="col-'+ setWidth +' "></li>');
      }
    }
  }
}

$(inputRange).on('input change', inputRange, function (e) {
  /*
  * splitting 100 by input range max value
  * for active tracker and tooltip position.
  */
  let inputMax = 100 / inputRange.attr('max');
  let trackerTooltipMove = (inputRange.val() * inputMax);
  $('.html-inupt-range .tooltip').css('left', trackerTooltipMove + '%');
  $('.html-input-range-custom .hir-tracker-thumb').css('width', trackerTooltipMove + '%');
  // updating tooltip value based on the range from to.
  $('.html-inupt-range .tooltip').text(inputRange.val());
});



/*! perfect-scrollbar - v0.5.2 */
(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";var t={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},o=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(n,r){return this.each(function(){var l=e.extend(!0,{},t),a=e(this);if("object"==typeof n?e.extend(!0,l,n):r=n,"update"===r)return a.data("perfect-scrollbar-update")&&a.data("perfect-scrollbar-update")(),a;if("destroy"===r)return a.data("perfect-scrollbar-destroy")&&a.data("perfect-scrollbar-destroy")(),a;if(a.data("perfect-scrollbar"))return a.data("perfect-scrollbar");a.addClass("ps-container");var s,i,c,d,u,p,f,v,h,b,g=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a),m=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a),w=e("<div class='ps-scrollbar-x'></div>").appendTo(g),T=e("<div class='ps-scrollbar-y'></div>").appendTo(m),L=parseInt(g.css("bottom"),10),y=L===L,I=y?null:parseInt(g.css("top"),10),S=parseInt(m.css("right"),10),C=S===S,x=C?null:parseInt(m.css("left"),10),D="rtl"===a.css("direction"),X=o(),Y=parseInt(g.css("borderLeftWidth"),10)+parseInt(g.css("borderRightWidth"),10),P=parseInt(g.css("borderTopWidth"),10)+parseInt(g.css("borderBottomWidth"),10),k=function(e,t){var o=e+t,n=d-h;b=0>o?0:o>n?n:o;var r=parseInt(b*(p-d)/(d-h),10);a.scrollTop(r)},E=function(e,t){var o=e+t,n=c-f;v=0>o?0:o>n?n:o;var r=parseInt(v*(u-c)/(c-f),10);a.scrollLeft(r)},M=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),l.maxScrollbarLength&&(e=Math.min(e,l.maxScrollbarLength)),e},W=function(){var e={width:c,display:s?"inherit":"none"};e.left=D?a.scrollLeft()+c-u:a.scrollLeft(),y?e.bottom=L-a.scrollTop():e.top=I+a.scrollTop(),g.css(e);var t={top:a.scrollTop(),height:d,display:i?"inherit":"none"};C?t.right=D?u-a.scrollLeft()-S-T.outerWidth():S-a.scrollLeft():t.left=D?a.scrollLeft()+2*c-u-x-T.outerWidth():x+a.scrollLeft(),m.css(t),w.css({left:v,width:f-Y}),T.css({top:b,height:h-P}),s?a.addClass("ps-active-x"):a.removeClass("ps-active-x"),i?a.addClass("ps-active-y"):a.removeClass("ps-active-y")},j=function(){g.hide(),m.hide(),c=l.includePadding?a.innerWidth():a.width(),d=l.includePadding?a.innerHeight():a.height(),u=a.prop("scrollWidth"),p=a.prop("scrollHeight"),!l.suppressScrollX&&u>c+l.scrollXMarginOffset?(s=!0,f=M(parseInt(c*c/u,10)),v=parseInt(a.scrollLeft()*(c-f)/(u-c),10)):(s=!1,f=0,v=0,a.scrollLeft(0)),!l.suppressScrollY&&p>d+l.scrollYMarginOffset?(i=!0,h=M(parseInt(d*d/p,10)),b=parseInt(a.scrollTop()*(d-h)/(p-d),10)):(i=!1,h=0,b=0,a.scrollTop(0)),b>=d-h&&(b=d-h),v>=c-f&&(v=c-f),W(),l.suppressScrollX||g.show(),l.suppressScrollY||m.show()},O=function(){var t,o;w.bind("mousedown"+X,function(e){o=e.pageX,t=w.position().left,g.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){g.hasClass("in-scrolling")&&(E(t,e.pageX-o),j(),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){g.hasClass("in-scrolling")&&g.removeClass("in-scrolling")}),t=o=null},q=function(){var t,o;T.bind("mousedown"+X,function(e){o=e.pageY,t=T.position().top,m.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){m.hasClass("in-scrolling")&&(k(t,e.pageY-o),j(),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){m.hasClass("in-scrolling")&&m.removeClass("in-scrolling")}),t=o=null},A=function(e,t){var o=a.scrollTop();if(0===e){if(!i)return!1;if(0===o&&t>0||o>=p-d&&0>t)return!l.wheelPropagation}var n=a.scrollLeft();if(0===t){if(!s)return!1;if(0===n&&0>e||n>=u-c&&e>0)return!l.wheelPropagation}return!0},B=function(){var e=!1,t=function(e){var t=e.originalEvent.deltaX,o=-1*e.originalEvent.deltaY;return(t===void 0||o===void 0)&&(t=-1*e.originalEvent.wheelDeltaX/6,o=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(t*=10,o*=10),t!==t&&o!==o&&(t=0,o=e.originalEvent.wheelDelta),[t,o]},o=function(o){var n=t(o),r=n[0],c=n[1];e=!1,l.useBothWheelAxes?i&&!s?(c?a.scrollTop(a.scrollTop()-c*l.wheelSpeed):a.scrollTop(a.scrollTop()+r*l.wheelSpeed),e=!0):s&&!i&&(r?a.scrollLeft(a.scrollLeft()+r*l.wheelSpeed):a.scrollLeft(a.scrollLeft()-c*l.wheelSpeed),e=!0):(a.scrollTop(a.scrollTop()-c*l.wheelSpeed),a.scrollLeft(a.scrollLeft()+r*l.wheelSpeed)),j(),e=e||A(r,c),e&&(o.stopPropagation(),o.preventDefault())};window.onwheel!==void 0?a.bind("wheel"+X,o):window.onmousewheel!==void 0&&a.bind("mousewheel"+X,o)},H=function(){var t=!1;a.bind("mouseenter"+X,function(){t=!0}),a.bind("mouseleave"+X,function(){t=!1});var o=!1;e(document).bind("keydown"+X,function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||!t||e(document.activeElement).is(":input,[contenteditable]"))){var r=0,l=0;switch(n.which){case 37:r=-30;break;case 38:l=30;break;case 39:r=30;break;case 40:l=-30;break;case 33:l=90;break;case 32:case 34:l=-90;break;case 35:l=-d;break;case 36:l=d;break;default:return}a.scrollTop(a.scrollTop()-l),a.scrollLeft(a.scrollLeft()+r),o=A(r,l),o&&n.preventDefault()}})},K=function(){var e=function(e){e.stopPropagation()};T.bind("click"+X,e),m.bind("click"+X,function(e){var t=parseInt(h/2,10),o=e.pageY-m.offset().top-t,n=d-h,r=o/n;0>r?r=0:r>1&&(r=1),a.scrollTop((p-d)*r)}),w.bind("click"+X,e),g.bind("click"+X,function(e){var t=parseInt(f/2,10),o=e.pageX-g.offset().left-t,n=c-f,r=o/n;0>r?r=0:r>1&&(r=1),a.scrollLeft((u-c)*r)})},Q=function(){var t=function(e,t){a.scrollTop(a.scrollTop()-t),a.scrollLeft(a.scrollLeft()-e),j()},o={},n=0,r={},l=null,s=!1;e(window).bind("touchstart"+X,function(){s=!0}),e(window).bind("touchend"+X,function(){s=!1}),a.bind("touchstart"+X,function(e){var t=e.originalEvent.targetTouches[0];o.pageX=t.pageX,o.pageY=t.pageY,n=(new Date).getTime(),null!==l&&clearInterval(l),e.stopPropagation()}),a.bind("touchmove"+X,function(e){if(!s&&1===e.originalEvent.targetTouches.length){var l=e.originalEvent.targetTouches[0],a={};a.pageX=l.pageX,a.pageY=l.pageY;var i=a.pageX-o.pageX,c=a.pageY-o.pageY;t(i,c),o=a;var d=(new Date).getTime(),u=d-n;u>0&&(r.x=i/u,r.y=c/u,n=d),e.preventDefault()}}),a.bind("touchend"+X,function(){clearInterval(l),l=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?(clearInterval(l),void 0):(t(30*r.x,30*r.y),r.x*=.8,r.y*=.8,void 0)},10)})},R=function(){a.bind("scroll"+X,function(){j()})},z=function(){a.unbind(X),e(window).unbind(X),e(document).unbind(X),a.data("perfect-scrollbar",null),a.data("perfect-scrollbar-update",null),a.data("perfect-scrollbar-destroy",null),w.remove(),T.remove(),g.remove(),m.remove(),g=m=w=T=s=i=c=d=u=p=f=v=L=y=I=h=b=S=C=x=D=X=null},F=function(t){a.addClass("ie").addClass("ie"+t);var o=function(){var t=function(){e(this).addClass("hover")},o=function(){e(this).removeClass("hover")};a.bind("mouseenter"+X,t).bind("mouseleave"+X,o),g.bind("mouseenter"+X,t).bind("mouseleave"+X,o),m.bind("mouseenter"+X,t).bind("mouseleave"+X,o),w.bind("mouseenter"+X,t).bind("mouseleave"+X,o),T.bind("mouseenter"+X,t).bind("mouseleave"+X,o)},n=function(){W=function(){var e={left:v+a.scrollLeft(),width:f};y?e.bottom=L:e.top=I,w.css(e);var t={top:b+a.scrollTop(),height:h};C?t.right=S:t.left=x,T.css(t),w.hide().show(),T.hide().show()}};6===t&&(o(),n())},G="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,J=function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&F(parseInt(e[2],10)),j(),R(),O(),q(),K(),B(),G&&Q(),l.useKeyboard&&H(),a.data("perfect-scrollbar",a),a.data("perfect-scrollbar-update",j),a.data("perfect-scrollbar-destroy",z)};return J(),a})}}); 

$('#description').perfectScrollbar();



// if ($(window).width() < 576) {
//   // location.reload();
//   $('footer ul').slideUp();
// }


//   $(window).resize(function(){
//     if ($(window).width() < 576) {
//     // location.reload();
//     $('footer ul').slideUp();
//   }else {
//     $('footer ul').slideDown();
//  }
//   });


  
  $('footer h4').click(function(){
    // $(this).parent().toggleClass('show');
    // $("footer .col-md-3").removeClass('show');
    $(this).parent().toggleClass('show');

  });

  $('footer .col-md-3:nth-last-child(2) h4').click(function(){
    $("footer .col-md-3:last-child").toggleClass('show');
  });


  $('#vergütung-inp .icon-input').click(function(){
    $("#vergütung-que").fadeToggle();
  });


  $('#vergütung-inp1 .icon-input').click(function(){
    $("#vergütung-que1").fadeToggle();
  });


  $('section#tabs .nav-item.nav-link').click(function(){
    $("section#tabs .nav-item.nav-link").removeClass('styled');
    $(this).addClass('styled');
  });



  $('img#cv-img').click(function(){
    $("#card-show").fadeToggle();
  });

  $('.hmbrgr').click(function(){
    $("body").toggleClass('over-hid');
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').removeClass("move-left");
    $('.navbar-collapse').css("transition","all 0s");
  });

  $('.mbl-srch').click(function(){
    $("body").toggleClass('over-hid');
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').removeClass("move-left");
  });
  
  
  $('.mob-back').click(function(){
    history.back();
  });

  
  $('#fot-1').click(function(){
    event.preventDefault();
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').addClass("move-left");
    $('#first-fot').addClass("show");
    $('.navbar-collapse').css("transition","all .5s");

  });

  $('#fot-2').click(function(){
    event.preventDefault();
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').addClass("move-left");
    $('.navbar-collapse').css("transition","all .5s");

    $('#sec-fot').addClass("show");
  });

  $('#fot-3').click(function(){
    event.preventDefault();
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').css("transition","all .5s");
    $('.navbar-collapse').addClass("move-left");
    $('#thr-fot').addClass("show");
  });

  $('.head-men').click(function(){
    $('.menu-slide').removeClass("show");
    $('.navbar-collapse').removeClass("move-left");
    $('.navbar-collapse').css("transition","all .5s");
  });
  



// to make header white on hamburger click 
  $('.hmbrgr').click(function(){
  if ($(window).scrollTop() <= 54) {
    if ($('.header-blue .navbar').hasClass('noscrol-header')) {

       $('.header-blue .navbar').removeClass('fixed-header');
          $('.header-blue .navbar').removeClass('noscrol-header');
         

          if($('.header-blue.bg-transparent .navbar-brand img[src="images/black-logo.svg"]')){  
            $(".header-blue.bg-transparent .navbar-brand img").attr("src", "images/p-logo.svg");
          }

          
          if($('.header-blue.bg-skublue .navbar-brand img[src="images/black-logo.svg"]')){  
            $(".header-blue.bg-skublue .navbar-brand img").attr("src", "images/p-logo.svg");
          }

          if($('.header-blue.bg-transparent .navbar .form-inline .btn img[src="images/bl-hd-sq.svg"]')){
            $(".header-blue.bg-transparent .navbar .form-inline .btn img").attr("src", "images/wh-hd-sq.svg");
         }

         if($('.header-blue.bg-transparent .navbar .mbl-srch img[src="images/bl-hd-sq.svg"]')){
          $(".header-blue.bg-transparent .navbar .mbl-srch img").attr("src", "images/wh-hd-sq.svg");
       }

         if($('.header-blue.bg-transparent .navbar-text img[src="images/black-cart.svg"]')){
          $(".header-blue.bg-transparent .navbar-text img").attr("src", "images/cart-icon.svg");
       }

       if($('.header-blue.bg-transparent .action-button img[src="images/user-icon-black.svg"]')){
        $(".header-blue.bg-transparent .action-button img").attr("src", "images/user-icon.svg");
       }


       if($('.header-blue.bg-skublue .navbar .form-inline .btn img[src="images/bl-hd-sq.svg"]')){
        $(".header-blue.bg-skublue .navbar .form-inline .btn img").attr("src", "images/wh-hd-sq.svg");
     }

     if($('.header-blue.bg-skublue .navbar .mbl-srch img[src="images/bl-hd-sq.svg"]')){
      $(".header-blue.bg-skublue .navbar .mbl-srch img").attr("src", "images/wh-hd-sq.svg");
    }

     if($('.header-blue.bg-skublue .navbar-text img[src="images/black-cart.svg"]')){
      $(".header-blue.bg-skublue .navbar-text img").attr("src", "images/cart-icon.svg");
    }

    if($('.header-blue.bg-skublue .action-button img[src="images/user-icon-black.svg"]')){
    $(".header-blue.bg-skublue .action-button img").attr("src", "images/user-icon.svg");
    }
    }
else {

          $('.header-blue .navbar').addClass('fixed-header');
          $('.header-blue .navbar').addClass('noscrol-header');
       
          
          if($('.header-blue.bg-transparent .navbar-brand img[src="images/p-logo.svg"]')){
             $(".header-blue.bg-transparent .navbar-brand img").attr("src", "images/black-logo.svg");
          }
          if($('.header-blue.bg-skublue .navbar-brand img[src="images/p-logo.svg"]')){
            $(".header-blue.bg-skublue .navbar-brand img").attr("src", "images/black-logo.svg");
         }
          
          if($('.header-blue.bg-transparent .navbar .form-inline .btn img[src="images/wh-hd-sq.svg"]')){
            $(".header-blue.bg-transparent .navbar .form-inline .btn img").attr("src", "images/bl-hd-sq.svg");
         }

         if($('.header-blue.bg-transparent .navbar .mbl-srch img[src="images/wh-hd-sq.svg"]')){
          $(".header-blue.bg-transparent .navbar .mbl-srch img").attr("src", "images/bl-hd-sq.svg");
       }

         

         if($('.header-blue.bg-transparent .navbar-text img[src="images/cart-icon.svg"]')){
          $(".header-blue.bg-transparent .navbar-text img").attr("src", "images/black-cart.svg");
       }

       if($('.header-blue.bg-transparent .action-button img[src="images/user-icon.svg"]')){
        $(".header-blue.bg-transparent .action-button img").attr("src", "images/user-icon-black.svg");
       }

       if($('.header-blue.bg-skublue .navbar .form-inline .btn img[src="images/wh-hd-sq.svg"]')){
        $(".header-blue.bg-skublue .navbar .form-inline .btn img").attr("src", "images/bl-hd-sq.svg");
     }

     if($('.header-blue.bg-skublue .navbar .mbl-srch img[src="images/wh-hd-sq.svg"]')){
      $(".header-blue.bg-skublue .navbar .mbl-srch img").attr("src", "images/bl-hd-sq.svg");
    }

       if($('.header-blue.bg-skublue .navbar-text img[src="images/cart-icon.svg"]')){
        $(".header-blue.bg-skublue .navbar-text img").attr("src", "images/black-cart.svg");
     }

     if($('.header-blue.bg-skublue .action-button img[src="images/user-icon.svg"]')){
      $(".header-blue.bg-skublue .action-button img").attr("src", "images/user-icon-black.svg");
     }
      }

      }

  });

  
   

  
  