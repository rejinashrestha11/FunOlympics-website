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
  function showAllGames() {
    resetHighlights();
    // No highlighting required for 'All Games' option
  }

  function showRegularDayGames() {
    resetHighlights();
    const regularCells = document.querySelectorAll('.regular');
    regularCells.forEach((cell) => {
      cell.classList.add('highlight-regular');
    });
  }

  function showSemiFinalGames() {
    resetHighlights();
    const semiFinalCells = document.querySelectorAll('.semi-final');
    semiFinalCells.forEach((cell) => {
      cell.classList.add('highlight-semi-final');
    });
  }

  function showFinalGames() {
    resetHighlights();
    const finalCells = document.querySelectorAll('.final');
    finalCells.forEach((cell) => {
      cell.classList.add('highlight-final');
    });
  }

  function resetHighlights() {
    const highlightedCells = document.querySelectorAll('.highlight-regular, .highlight-semi-final, .highlight-final');
    highlightedCells.forEach((cell) => {
      cell.classList.remove('highlight-regular', 'highlight-semi-final', 'highlight-final');
    });
  }  