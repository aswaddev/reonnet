var elements = document.querySelectorAll('.text');

function adjustParagraphWidths() {
  elements.forEach(element => {
    element.style.width = element.parentNode.parentNode.clientWidth - 50 + 'px';
  });
}

adjustParagraphWidths();

window.addEventListener('resize', adjustParagraphWidths);

var isInViewport = function(e) {
  var element = e.getBoundingClientRect();
  var html = document.documentElement;
  var toleranceY = 150;
  return (
    element.top >= 0 - toleranceY &&
    element.left >= 0 &&
    element.bottom <=
      (window.innerHeight || html.clientHeight) + element.height - 100 &&
    element.right <= (window.innerWidth || html.clientWidth)
  );
};

window.addEventListener('scroll', e => {
  const scrolled = window.scrollY;
  elements.forEach(element => {
    if (isInViewport(element.parentNode)) {
      console.log(element.parentNode.dataset.color);
      if ((color = element.parentNode.dataset.color)) {
        document.getElementById('body').className = '';
        document.getElementById('body').classList.add(color);
      }
      if (!element.classList.contains('revealed')) {
        element.parentNode.classList.add('scale');
        element.classList.add('revealed');
      }
    }
  });
});
// $(window).scroll(function () {

//   // selectors
//   var $window = $(window),
//     $body = $('.content'),
//     $panel = $('.panel');

//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);

//   $panel.each(function () {
//     var $this = $(this);

//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
//       });

//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });

// }).scroll();
