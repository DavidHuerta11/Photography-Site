let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // slideshow dot movement
  for (let j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace("dot-active", "");
  }

  // Display specific img and dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
  setTimeout(showSlides, 4000); // Change image every n seconds
}
