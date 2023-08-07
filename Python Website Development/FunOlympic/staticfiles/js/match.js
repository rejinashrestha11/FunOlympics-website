// document.addEventListener("DOMContentLoaded", function() {
//   var mainVideo = document.getElementById("main-video");
//   var videoLinks = document.getElementsByClassName("video-link");

//   for (var i = 0; i < videoLinks.length; i++) {
//     videoLinks[i].addEventListener("click", function(event) {
//       event.preventDefault();
//       var videoSource = this.getAttribute("data-src");
//       mainVideo.src = videoSource;
//       mainVideo.load();
//       mainVideo.play();
//     });
//   }

    // Function to handle the like button click event
    function handleLikeButtonClick(event) {
      // Toggle the 'active' class on the like button
      event.target.classList.toggle('active');
    }
  
    // Get the like button element
    const likeButton = document.querySelector('.icon-button.like-button');
  
    // Attach the click event listener to the like button
    likeButton.addEventListener('click', handleLikeButtonClick);
  
// });
