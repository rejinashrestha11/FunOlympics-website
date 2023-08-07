const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showNextItem() {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}

// Change slide every 5 seconds
setInterval(showNextItem, 5000);
