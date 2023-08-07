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
