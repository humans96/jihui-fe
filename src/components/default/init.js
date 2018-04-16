import $ from 'jQuery';

export default function () {
  
  $('.animate-box').waypoint(function (direction) {
    var i = 0;
    if($(this.element).hasClass('animated')){
      $(this.element).removeClass('animated fadeInUp');
    }
    if (direction === 'down' && !$(this.element).hasClass('animated')) {
      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function () {
        $('body .animate-box.item-animate').each(function (k) {
          var el = $(this);
          setTimeout(function () {
            el.addClass('fadeInUp animated');
            el.removeClass('item-animate');
          }, k * 50, 'easeInOutExpo');
        });
      }, 100);
    }
  }, { offset: '85%' });

  $('.animate-fadeIn').waypoint(function () {
    var i = 0;
    if($(this.element).hasClass('animated')){
      $(this.element).removeClass('animated fadeIn');
    }
    if (!$(this.element).hasClass('animated')) {
      i++;

      $(this.element).addClass('item-animate');
      setTimeout(function () {
        $('body .animate-fadeIn.item-animate').each(function (k) {
          var el = $(this);
          setTimeout(function () {
            el.addClass('fadeIn animated');
            el.removeClass('item-animate');
          }, k * 50, 'easeInOutExpo');
        });
      }, 100);
    }
  }, { offset: '85%' });

  // $('.animate-fadeInRight').waypoint(function () {
  //   var i = 0;
  //   if($(this.element).hasClass('animated')){
  //     $(this.element).removeClass('animated fadeInRight');
  //   }
  //   if (!$(this.element).hasClass('animated')) {
  //     i++;

  //     $(this.element).addClass('item-animate');
  //     setTimeout(function () {
  //       $('body .animate-fadeInRight.item-animate').each(function (k) {
  //         var el = $(this);
  //         setTimeout(function () {
  //           el.addClass('fadeInRight animated');
  //           el.removeClass('item-animate');
  //         }, k * 50, 'easeInOutExpo');
  //       });
  //     }, 100);
  //   }
  // }, { offset: '90%' });

  // $('.animate-zoomIn').waypoint(function () {
  //   var i = 0;
  //   if($(this.element).hasClass('animated')){
  //     $(this.element).removeClass('animated zoomIn');
  //   }
  //   if (!$(this.element).hasClass('animated')) {
  //     i++;

  //     $(this.element).addClass('item-animate');
  //     setTimeout(function () {
  //       $('body .animate-zoomIn.item-animate').each(function (k) {
  //         var el = $(this);
  //         setTimeout(function () {
  //           el.addClass('zoomIn animated');
  //           el.removeClass('item-animate');
  //         }, k * 50, 'easeInOutExpo');
  //       });
  //     }, 100);
  //   }
  // }, { offset: '85%' });

  // $('.animate-bounceInLeft').waypoint(function () {
  //   var i = 0;
  //   if($(this.element).hasClass('animated')){
  //     $(this.element).removeClass('animated bounceInLeft');
  //   }
  //   if (!$(this.element).hasClass('animated')) {
  //     i++;

  //     $(this.element).addClass('item-animate');
  //     setTimeout(function () {
  //       $('body .animate-bounceInLeft.item-animate').each(function (k) {
  //         var el = $(this);
  //         setTimeout(function () {
  //           el.addClass('bounceInLeft animated');
  //           el.removeClass('item-animate');
  //         }, k * 50, 'easeInOutExpo');
  //       });
  //     }, 100);
  //   }
  // }, { offset: '85%' });

  // $('.animate-bounceInRight').waypoint(function () {
  //   var i = 0;
  //   if($(this.element).hasClass('animated')){
  //     $(this.element).removeClass('animated bounceInRight');
  //   }
  //   if (!$(this.element).hasClass('animated')) {
  //     i++;

  //     $(this.element).addClass('item-animate');
  //     setTimeout(function () {
  //       $('body .animate-bounceInRight.item-animate').each(function (k) {
  //         var el = $(this);
  //         setTimeout(function () {
  //           el.addClass('bounceInRight animated');
  //           el.removeClass('item-animate');
  //         }, k * 50, 'easeInOutExpo');
  //       });
  //     }, 100);
  //   }
  // }, { offset: '85%' });

  // $('.animate-rollIn').waypoint(function () {
  //   var i = 0;
  //   if($(this.element).hasClass('animated')){
  //     $(this.element).removeClass('animated rollIn');
  //   }
  //   if (!$(this.element).hasClass('animated')) {
  //     i++;

  //     $(this.element).addClass('item-animate');
  //     setTimeout(function () {
  //       $('body .animate-rollIn.item-animate').each(function (k) {
  //         var el = $(this);
  //         setTimeout(function () {
  //           el.addClass('rollIn animated');
  //           el.removeClass('item-animate');
  //         }, k * 50, 'easeInOutExpo');
  //       });
  //     }, 100);
  //   }
  // }, { offset: '85%' });


};
