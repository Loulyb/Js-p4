let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Hovedfunktionen, der styrer visningen af slides.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myfade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Skjuler slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // Fjern aktiv klassen fra alle slides
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; // Marker det aktuelle punkt
}
