document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = 'none'; // Hide hamburger icon
    document.querySelector('.close-icon').style.display = 'block'; // Show close icon (X)
});

document.querySelector('.close-icon').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.menu-toggle').style.display = 'flex'; // Show hamburger icon
    document.querySelector('.close-icon').style.display = 'none'; // Hide close icon (X)
});




let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${
      100 * (index - slideIndex)
    }%)`;
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

showSlide();
autoSlide();
