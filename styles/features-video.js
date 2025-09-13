// features-video.js
// Handles video play/pause and overlay button logic for the features section

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('features-video');
  const overlay = document.querySelector('.play-button-overlay');
  const playIcon = document.querySelector('.play-button-icon');
  const playCircle = document.querySelector('.play-button-circle');

  function showOverlay() {
    overlay.style.display = 'flex';
  }

  function hideOverlay() {
    overlay.style.display = 'none';
  }

  // Play/pause video on overlay click
  overlay.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      hideOverlay();
    }
  });

  // Pause video and show overlay on click on video
  video.addEventListener('click', function () {
    if (!video.paused) {
      video.pause();
      showOverlay();
    }
  });

  // Show overlay when video ends
  video.addEventListener('ended', showOverlay);

  // Show overlay initially if video is paused
  if (video.paused) {
    showOverlay();
  }
});
