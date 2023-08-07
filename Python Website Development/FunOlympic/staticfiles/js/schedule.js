// Add responsive behavior to the table
window.addEventListener('resize', function () {
    var screenWidth = window.innerWidth;
    var tableHeaders = document.querySelectorAll('th');
  
    if (screenWidth < 600) {
      tableHeaders.forEach(function (header) {
        header.style.fontSize = '14px';
      });
    } else {
      tableHeaders.forEach(function (header) {
        header.style.fontSize = '';
      });
    }
  });
  
  // Looping through videos and resetting playback
  const videos = document.querySelectorAll('.video-section video');
  
  videos.forEach(video => {
    video.addEventListener('ended', function() {
      video.currentTime = 0;
      video.play();
    });
  });
  