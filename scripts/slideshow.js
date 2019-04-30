////////////////////// Attractions slideshows /////////////////////////
// Slideshow Places
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slidesPlaces");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Slideshow Bounties

var slideIndexB = 0;
showSlides2();

function showSlides2() {
  var i;
  var slidesB = document.getElementsByClassName("slidesBounty");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesB.length; i++) {
    slidesB[i].style.display = "none";
  }
  slideIndexB++;
  if (slideIndexB > slidesB.length) {
    slideIndexB = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesB[slideIndexB - 1].style.display = "block";
  dots[slideIndexB - 1].className += " active";
  setTimeout(showSlides2, 5000); // Change image every 5 seconds
}

// Slideshow People
var slideIndexC = 0;
showSlides3();

function showSlides3() {
  var i;
  var slidesC = document.getElementsByClassName("slidesPeople");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slidesC.length; i++) {
    slidesC[i].style.display = "none";
  }
  slideIndexC++;
  if (slideIndexC > slidesC.length) {
    slideIndexC = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesC[slideIndexC - 1].style.display = "block";
  dots[slideIndexC - 1].className += " active";
  setTimeout(showSlides3, 5000); // Change image every 5 seconds
}
