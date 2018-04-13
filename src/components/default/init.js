import $ from 'jQuery';

export default function () {
  var i = 0;
  $('.animate-box').waypoint(function (direction) {
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
};
