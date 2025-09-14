document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('features-video');
  const overlay = document.querySelector('.play-button-overlay');

  function showOverlay() {
    overlay.style.display = 'flex';
  }

  function hideOverlay() {
    overlay.style.display = 'none';
  }
  overlay.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      hideOverlay();
    }
  });
  video.addEventListener('click', function () {
    if (!video.paused) {
      video.pause();
      showOverlay();
    }
  });
  video.addEventListener('ended', showOverlay);
  if (video.paused) {
    showOverlay();
  }
});
