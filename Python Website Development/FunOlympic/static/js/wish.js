function toggleLike(button) {
    var unlikeButton = button.parentNode.querySelector('.unlike-button');
    button.classList.toggle('liked');
    unlikeButton.classList.remove('unliked');
  }
  
  function toggleUnlike(button) {
    var likeButton = button.parentNode.querySelector('.like-button');
    button.classList.toggle('unliked');
    likeButton.classList.remove('liked');
  }
  
  function toggleShareDialog() {
    var dialog = document.querySelector('.share-dialog');
  
    if (dialog.style.display === 'none') {
      dialog.style.display = 'block';
    } else {
      dialog.style.display = 'none';
    }
  }
  

  function playVideo(element) {
    var mainVideoSection = document.querySelector('.video-sectiona');
    var mainVideo = mainVideoSection.querySelector('video');
    var mainVideoTitle = mainVideoSection.querySelector('.title');
  
    var recommendedVideo = element.querySelector('video');
    var recommendedVideoTitle = element.querySelector('.title');
  
    // Swap the video source and title
    var tempSrc = mainVideo.src;
    var tempTitle = mainVideoTitle.textContent;
  
    mainVideo.src = recommendedVideo.src;
    mainVideoTitle.textContent = recommendedVideoTitle.textContent;
  
    recommendedVideo.src = tempSrc;
    recommendedVideoTitle.textContent = tempTitle;
  }
  
