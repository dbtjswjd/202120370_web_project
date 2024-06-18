//maincontents js

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('cover');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'flex';

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function adjustImageSize() {
  let covers = document.querySelectorAll('.cover');
  covers.forEach(function (cover) {
    let img = cover.querySelector('.cover__img');
    let containerWidth = cover.clientWidth;
    let containerHeight = cover.clientHeight;
    let imgRatio = img.naturalWidth / img.naturalHeight;

    if (containerWidth / containerHeight > imgRatio) {
      img.style.width = '100%';
      img.style.height = 'auto';
    } else {
      img.style.width = 'auto';
      img.style.height = '100%';
    }
  });
}
