var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(slide_position) {
  showSlides(slideIndex += slide_position)
}

function currentSlide(slide_position) {
  showSlides(slideIndex = slide_position);
}

function showSlides(slide_position) {
  var i;
  var slides = document.getElementsByClassName("TBLSlides");
  var dots = document.getElementsByClassName("dot");

  if (slide_position > slides.length) {
    slideIndex = 1;
  }

  if (slide_position < 1) {
    slideIndex = slides.length;
  }

  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i=0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
