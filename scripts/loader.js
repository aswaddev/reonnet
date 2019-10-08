window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  var loadingGif = document.getElementById('loading-gif');

  loader.classList.add('loaded');
  loadingGif.classList.add('loaded');

  loader.addEventListener('animationend', function(e) {
    if (e.animationName == 'scale-out') {
      loader.style.visibility = 'hidden';
      document.querySelector('.header').classList.add('loaded');
      document.querySelector('#header-text').classList.add('loaded');
      // document.querySelector('#menu-wrapper').style.opacity = 1;
      // document.querySelector('#menu-wrapper').style.visibility = 'visible';
    }
  });
});
