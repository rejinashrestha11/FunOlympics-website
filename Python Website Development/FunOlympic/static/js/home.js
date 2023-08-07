const carousel = document.querySelector('.carousel');
const images = carousel.getElementsByTagName('img');
let currentIndex = 0;

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
    images[index].style.opacity = 1;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Change image every 3 seconds
setInterval(nextImage, 3000);

// Show the first image initially
showImage(currentIndex);

const videos = document.querySelectorAll('.video-section video');

videos.forEach(video => {
    video.addEventListener('ended', function() {
        video.currentTime = 0;
        video.play();
    });
});

// Additional JavaScript code...

document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach(function(item) {
        const img = item.querySelector("img");
        const captionTitle = item.querySelector(".caption-title");
        const captionDescription = item.querySelector(".caption-description");

        img.addEventListener("load", function() {
            captionTitle.textContent = img.alt;
            captionDescription.textContent = "Description of " + img.alt + " image...";
        });
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

  // function toggleWatchLater(checkbox) {
  //   var toggleLabel = checkbox.parentNode.querySelector('.toggle-label');
  //   toggleLabel.textContent = checkbox.checked ? 'Added' : '';
  // }

  function addToWishlist(button) {
    button.classList.toggle('added-to-wishlist');
    if (button.classList.contains('added-to-wishlist')) {
      button.style.color = 'blue';
      showWishlistDialog();
    } else {
      button.style.color = '';
    }
  }
  
  function showWishlistDialog() {
    var wishlistDialog = document.querySelector('.wishlist-dialog');
    wishlistDialog.style.display = 'block';
  }
  
  function closeWishlistDialog() {
    var wishlistDialog = document.querySelector('.wishlist-dialog');
    wishlistDialog.style.display = 'none';
  }

// // Wait for the document to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the notification elements
//   var notificationIcon = document.getElementById("notification-icon");
//   var notificationCount = document.getElementById("notification-count");
//   var notificationDialog = document.getElementById("notification-dialog");
//   var closeBtn = document.getElementById("close-btn");

//   // Set the initial notification count to 0
//   var count = 0;
//   updateNotificationCount();

//   // Add a click event listener to the notification icon
//   notificationIcon.addEventListener("click", function() {
//     // Show the notification dialog
//     notificationDialog.classList.remove("hidden");
//     // Reset the notification count
//     count = 0;
//     updateNotificationCount();
//   });

//   // Add a click event listener to the close button
//   closeBtn.addEventListener("click", function() {
//     // Hide the notification dialog
//     notificationDialog.classList.add("hidden");
//   });

//   // Update the notification count
//   function updateNotificationCount() {
//     notificationCount.textContent = count;
//     if (count > 0) {
//       notificationCount.style.display = "flex";
//     } else {
//       notificationCount.style.display = "none";
//     }
//   }

//   // Function to simulate new notifications
//   function notify() {
//     count++;
//     updateNotificationCount();
//   }

//   // Simulate a new notification after 10 seconds
//   setTimeout(notify, 2000);
// });

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the notification elements
  var notificationIcon = document.getElementById("notification-icon");
  var notificationCount = document.getElementById("notification-count");
  var notificationDialog = document.getElementById("notification-dialog");
  var closeBtn = document.getElementById("close-btn");

  // Set the initial notification count to 0
  var count = 0;
  updateNotificationCount();

  // Add a click event listener to the notification icon
  notificationIcon.addEventListener("click", function() {
    // Show the notification dialog
    notificationDialog.classList.remove("hidden");
    // Reset the notification count
    count = 0;
    updateNotificationCount();
  });

  // Add a click event listener to the close button
  closeBtn.addEventListener("click", function() {
    // Hide the notification dialog
    notificationDialog.classList.add("hidden");
  });

  // Update the notification count
  function updateNotificationCount() {
    notificationCount.textContent = count;
    if (count > 0) {
      notificationCount.style.display = "flex";
    } else {
      notificationCount.style.display = "none";
    }
  }

  // Function to simulate new notifications
  function notify() {
    count++;
    updateNotificationCount();
    setTimeout(notify, 5000); // Schedule the next notification after 5 seconds
  }

  // Start the notification loop
  notify();
});

const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showNextItem() {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}

// Change slide every 4 seconds
setInterval(showNextItem, 4000);

