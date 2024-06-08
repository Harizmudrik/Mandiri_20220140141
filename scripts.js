
$(document).ready(function () {
  $('#slider').carousel({
    interval: 2000
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('sza-image');
    var video = document.getElementById('video-background');

    image.addEventListener('click', function() {
      if (video.style.display === 'none') {
        video.style.display = 'block';
        video.play();
      } else {
        video.style.display = 'none';
        video.pause();
      }
    });
  });

