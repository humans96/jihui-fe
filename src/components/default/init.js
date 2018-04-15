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
};
